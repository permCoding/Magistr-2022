class BinMask:
    def __init__(self, capacity, items):
        self.capacity = capacity
        self.items = items  # исходная коллекция всех объектов
        self.max_value = 0  # максимальная взятая ценность

    def solve(self):
        amount_combs = 1 << len(self.items)  # общее кол-во комбинаций
        for i in range(amount_combs):  # индекс комбинации
            cur_weight, cur_value = 0, 0
            
            for j in range(len(self.items)):
                mask = 1 << j  # выбираем индекс объекта
                if (i & mask > 0):  # если он есть в комбинации
                    next_item = self.items[j]  # следующий объект
                    cur_weight += next_item["weight"]
                    cur_value += next_item["value"]
            
            if (cur_weight <= self.capacity) and (cur_value > self.max_value):
                self.max_value = cur_value
        
        return self.max_value, []  # добавить заполнение списка взятых объектов


if __name__ == "__main__":
    import json
    with open('./json/input4.json') as file:
        data = json.load(file)  # исходные данные
    max_w = 100  # размер ранца
    binmask = BinMask(max_w, data)
    max_value, result = binmask.solve()  # ценность и список id объектов, взятых в рюкзак
    print(f"Максимальная ценность рюкзака: {max_value}")
    print("Объекты в рюкзаке:")
    print(json.dumps(result, indent=4, ensure_ascii=False))
