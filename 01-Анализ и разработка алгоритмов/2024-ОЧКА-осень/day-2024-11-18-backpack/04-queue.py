class Backpack:
    def __init__(self, capacity, items):
        self.capacity = capacity
        self.items = items  # исходная коллекция всех объектов
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
                if current_weight + next_item["weight"] <= self.capacity:  # не входит по весу
                    new_value = current_value + next_item["value"]
                    new_weight = current_weight + next_item["weight"]
                    self.max_value = max(self.max_value, new_value)  # обновляем max_value
                    queue.append((current_level + 1, new_value, new_weight))      # 1. добавляем в очередь
                queue.append((current_level + 1, current_value, current_weight))  # 2. добавляем в очередь

        return self.max_value, []  # добавить заполнение списка взятых объектов


if __name__ == "__main__":
    import json
    with open('./json/input4.json') as file:
        data = json.load(file)  # исходные данные
    max_w = 100  # размер ранца
    backpack = Backpack(max_w, data)
    max_value, result = backpack.solve(), []  # ценность и список id объектов, взятых в рюкзак
    print(f"Максимальная ценность рюкзака: {max_value}")
    print("Объекты в рюкзаке:")
    print(json.dumps(result, indent=4, ensure_ascii=False))
