class Recurs:
    def __init__(self, capacity, items):
        self.capacity = capacity
        self.items = items  # исходная коллекция всех объектов
        self.max_value = 0  # максимальная взятая ценность

    def solve(self):
        def search_combo(combo, deep):
                if deep == len(self.items):
                    new_combo = combo[:]  # новая комбинация объектов
                    cur_weight, cur_value = 0, 0
                    for item in new_combo:
                        cur_weight += item["weight"]
                        cur_value += item["value"]
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


if __name__ == "__main__":
    import json
    with open('./json/input20.json') as file:
        data = json.load(file)  # исходные данные
    max_w = 100  # размер ранца
    recurs = Recurs(max_w, data)
    max_value, result = recurs.solve()  # ценность и список id объектов, взятых в рюкзак
    print(f"Максимальная ценность рюкзака: {max_value}")
    print("Объекты в рюкзаке:")
    print(json.dumps(result, indent=4, ensure_ascii=False))
