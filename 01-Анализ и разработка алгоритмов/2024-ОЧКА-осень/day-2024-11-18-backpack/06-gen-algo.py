import random

class Item:
    def __init__(self, value, weight):
        self.value = value
        self.weight = weight

def create_population(population_size, items, max_weight):
    population = []
    for _ in range(population_size):
        # Генерируем индивидуум с случайным набором предметов
        individual = [random.randint(0, 1) for _ in range(len(items))]
        while calculate_weight(individual, items) > max_weight:
            individual = [random.randint(0, 1) for _ in range(len(items))]
        population.append(individual)
    return population

def calculate_weight(individual, items):
    return sum(item.weight for i, item in enumerate(items) if individual[i] == 1)

def calculate_value(individual, items):
    return sum(item.value for i, item in enumerate(items) if individual[i] == 1)

def fitness(individual, items, max_weight):
    weight = calculate_weight(individual, items)
    value = calculate_value(individual, items)
    if weight > max_weight:
        return 0  # Низкая пригодность, если превышен вес
    return value

def selection(population, items, max_weight):
    weighted_population = [(fitness(ind, items, max_weight), ind) for ind in population]
    weighted_population.sort(reverse=True, key=lambda x: x[0])
    return [ind for _, ind in weighted_population[:len(population) // 2]]

def crossover(parent1, parent2):
    crossover_point = random.randint(1, len(parent1) - 1)
    return parent1[:crossover_point] + parent2[crossover_point:]

def mutate(individual):
    mutation_point = random.randint(0, len(individual) - 1)
    individual[mutation_point] = 1 - individual[mutation_point]  # Переключаем 0 на 1 или наоборот

def genetic_algorithm(items, max_weight, population_size, generations):
    population = create_population(population_size, items, max_weight)

    for generation in range(generations):
        population = selection(population, items, max_weight)
        next_population = []

        while len(next_population) < population_size:
            parent1 = random.choice(population)
            parent2 = random.choice(population)
            child = crossover(parent1, parent2)
            if random.random() < 0.1:  # 10% вероятность мутации
                mutate(child)
            next_population.append(child)

        population = next_population

    # Найдем лучший индивидуум в финальной популяции
    best_individual = max(population, key=lambda ind: fitness(ind, items, max_weight))
    return best_individual, calculate_value(best_individual, items)


if __name__ == "__main__":
    import json
    with open('./json/input30.json') as file:
        data = json.load(file)  # исходные данные
    items = [Item(item['value'], item['weight']) for item in data]
    max_weight = 150
    
    population_size = 30
    generations = 50

    best_individual, best_value = genetic_algorithm(items, max_weight, population_size, generations)
    print("Лучшая конфигурация:", best_individual)
    print("Лучшее значение:", best_value)
    
"""
    items = [Item(10, 5), Item(40, 4), Item(30, 6), Item(50, 3), Item(35, 8)]
    max_weight = 10
    
    items = [Item(40, 200), Item(50, 314), Item(100, 198), Item(60, 500), Item(30, 300), Item(45, 400)]
    max_weight = 1500
"""