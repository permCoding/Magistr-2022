import random


class Item:
    def __init__(self, id, weight, value):
        self.id = id
        self.weight = weight
        self.value = value


class Greedy:
    def __init__(self, capacity, items):
        self.capacity = capacity
        self.items = [Item(item['id'], item['weight'], item['value']) for item in items]  # исходная коллекция всех объектов
        self.max_value = 0  # максимальная взятая ценность

    def solve(self):
        self.items.sort(key=lambda item: item.value/item.weight, reverse=True)
        weight_items, i = 0, 0  # текущий вес набора и текущий индекс объекта
        while True:
            next_item = self.items[i]
            if weight_items + next_item.weight > self.capacity: break
            weight_items += next_item.weight
            self.max_value += next_item.value
            i += 1
        return self.max_value, self.items[0: i]


class BinMask:
    def __init__(self, capacity, items):
        self.capacity = capacity
        self.items = [Item(item['id'], item['weight'], item['value']) for item in items]  # исходная коллекция всех объектов
        self.max_value = 0  # максимальная взятая ценность

    def solve(self):
        amount_combs = 1 << len(self.items)  # общее кол-во комбинаций
        for i in range(amount_combs):  # индекс комбинации
            cur_weight, cur_value = 0, 0
            
            for j in range(len(self.items)):
                mask = 1 << j  # выбираем индекс объекта
                if (i & mask > 0):  # если он есть в комбинации
                    next_item = self.items[j]  # следующий объект
                    cur_weight += next_item.weight
                    cur_value += next_item.value
            
            if (cur_weight <= self.capacity) and (cur_value > self.max_value):
                self.max_value = cur_value
        
        return self.max_value, []  # добавить заполнение списка взятых объектов


class Recurs:
    def __init__(self, capacity, items):
        self.capacity = capacity
        self.items = [Item(item['id'], item['weight'], item['value']) for item in items]  # исходная коллекция всех объектов
        self.max_value = 0  # максимальная взятая ценность

    def solve(self):
        def search_combo(combo, deep):
                if deep == len(self.items):
                    new_combo = combo[:]  # новая комбинация объектов
                    cur_weight, cur_value = 0, 0
                    for item in new_combo:
                        cur_weight += item.weight
                        cur_value += item.value
                    if cur_weight <= self.capacity:  # если входит в ограничения
                        if cur_value > self.max_value:
                            self.max_value = cur_value
                else:
                    combo.append(self.items[deep])  # 1 взяли объект в рюкзак
                    search_combo(combo, deep+1)
                    combo.pop()                   # 2 НЕ взяли объект в рюкзак
                    search_combo(combo, deep+1)
            
        search_combo([], 0)  # поиск комбинации
        
        return self.max_value, []  # добавить заполнение списка взятых объектов


class Que:
    def __init__(self, capacity, items):
        self.capacity = capacity
        self.items = [Item(item['id'], item['weight'], item['value']) for item in items]  # исходная коллекция всех объектов
        self.max_value = 0  # максимальная взятая ценность

    def solve(self):
        queue = []  # queue для хранения узлов
        root = (0, 0, 0.0)  # (уровень, текущая ценность, текущий вес)
        queue.append(root)
        
        while queue:  # пока очередь не пуста
            current_level, current_value, current_weight = queue.pop(0)

            if current_level < len(self.items):  # есть ли ещё объекты
                next_item = self.items[current_level]  # следующий объект
                # две ветви дерева перебора: 1. с включением и 2. без включением следующего объекта
                if current_weight + next_item.weight <= self.capacity:  # не входит по весу
                    new_value = current_value + next_item.value
                    new_weight = current_weight + next_item.weight
                    self.max_value = max(self.max_value, new_value)  # обновляем max_value
                    queue.append((current_level + 1, new_value, new_weight))      # 1. добавляем в очередь
                queue.append((current_level + 1, current_value, current_weight))  # 2. добавляем в очередь

        return self.max_value, []  # добавить заполнение списка взятых объектов


class Dinamic:
    def __init__(self, capacity, items):
        self.capacity = capacity
        self.items = [Item(item['id'], item['weight'], item['value']) for item in items]  # исходная коллекция всех объектов
        self.max_value = 0  # максимальная взятая ценность

    def solve(self):
        amount = len(self.items)  # кол-во объектов
        
        tab = []  # двумерная таблица для динамики
        for row in range(self.capacity+1):  # каждая строка таблицы - это свой рюкзак
            tr = [Item(0,0,0) for _ in range(amount)]  # новая строка
            tab.append(tr)  # добавляем в таблицу
            
        col = 0  # формируем левый столбец, col - индекс объекта
        for row in range(self.capacity+1):  # по всем строкам - размерам рюкзака
            item = self.items[col]
            if row >= item.weight:  # если размер рюкзака больше веса предмета
                tab[row][col].weight = item.weight
                tab[row][col].value = item.value

        for row in range(self.capacity+1):  # заполняем таблицу по всем рюкзакам
            for col in range(1, amount):  # и по всем объектам
                tab[row][col].weight = tab[row][col-1].weight  # переписываем решение слева
                tab[row][col].value  = tab[row][col-1].value
                
                item = self.items[col]
                diff_weight = row - item.weight
                if diff_weight >= 0:  # если можно отступить назад по весу
                                      # то нужно выбрать лучшее из left и up
                    up = tab[diff_weight][col-1]  # решение сверху
                    if up.value + item.value > tab[row][col].value:
                        tab[row][col].weight = up.weight + item.weight
                        tab[row][col].value  = up.value  + item.value
        # for i, row in enumerate(tab): print(i, row)
        return tab[-1][amount-1].value, []  # добавить заполнение списка взятых объектов


class Genetic:
    def __init__(self, capacity, items):
        self.capacity = capacity
        self.items = [Item(item['id'], item['weight'], item['value']) for item in items]  # исходная коллекция всех объектов
        self.max_value = 0  # максимальная взятая ценность

    def solve(self, population_size=30, generations=50):
        population = self.create_population(population_size)

        for generation in range(generations):
            population = self.selection(population)
            next_population = []

            while len(next_population) < population_size:
                parent1 = random.choice(population)
                parent2 = random.choice(population)
                child = self.crossover(parent1, parent2)
                if random.random() < 0.1:  # 10% вероятность мутации
                    self.mutate(child)
                next_population.append(child)

            population = next_population

        # Найдем лучший индивидуум в финальной популяции
        best_individual = max(population, key=lambda ind: self.fitness(ind))
        return self.calculate_value(best_individual), self.get_combo_objects(best_individual)

    def get_combo_objects(self, individual):
        return [item for i, item in enumerate(self.items) if individual[i] == 1]
    
    def calculate_weight(self, individual):
        return sum(item.weight for i, item in enumerate(self.items) if individual[i] == 1)
    
    def calculate_value(self, individual):
        return sum(item.value for i, item in enumerate(self.items) if individual[i] == 1)
    
    def fitness(self, individual):
        weight = self.calculate_weight(individual)
        value = self.calculate_value(individual)
        if weight > self.capacity:
            return 0  # Низкая пригодность, если превышен вес
        return value
    
    def crossover(self, parent1, parent2):
        crossover_point = random.randint(1, len(parent1) - 1)
        return parent1[:crossover_point] + parent2[crossover_point:]

    def mutate(self, individual):
        mutation_point = random.randint(0, len(individual) - 1)
        individual[mutation_point] = 1 - individual[mutation_point]  # Переключаем 0 на 1 или наоборот
    
    def selection(self, population):
        weighted_population = [(self.fitness(ind), ind) for ind in population]
        weighted_population.sort(reverse=True, key=lambda x: x[0])
        return [ind for _, ind in weighted_population[:len(population) // 2]]
    
    def create_population(self, population_size):
        population = []
        for _ in range(population_size):
            # Генерируем индивидуум с случайным набором предметов
            individual = [random.randint(0, 1) for _ in range(len(self.items))]
            while self.calculate_weight(individual) > self.capacity:
                individual = [random.randint(0, 1) for _ in range(len(self.items))]
            population.append(individual)
        return population
