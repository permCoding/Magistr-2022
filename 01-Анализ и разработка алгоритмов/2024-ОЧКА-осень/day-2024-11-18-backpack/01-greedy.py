class Greedy:
    def __init__(self, capacity, items):
        self.capacity = capacity
        self.items = items  # исходная коллекция всех объектов
        self.max_value = 0  # максимальная взятая ценность

    def solve(self):
        self.items.sort(key=lambda x: x["value"] / x["weight"], reverse=True)
        weight, i = 0, 0
        while True:
            next_item = self.items[i]
            if weight + next_item["weight"] > self.capacity: break
            weight += next_item["weight"]
            self.max_value += next_item["value"]
            i += 1
        return self.max_value, self.items[0: i]


if __name__ == "__main__":
    import json
    with open('./json/input30.json') as file:
        data = json.load(file)  # исходные данные
    max_w = 150  # размер ранца
    greedy = Greedy(max_w, data)
    max_value, result = greedy.solve()  # ценность и список id объектов, взятых в рюкзак
    print(f"Максимальная ценность рюкзака: {max_value}")
    print("Объекты в рюкзаке:")
    print(json.dumps(result, indent=4, ensure_ascii=False))
