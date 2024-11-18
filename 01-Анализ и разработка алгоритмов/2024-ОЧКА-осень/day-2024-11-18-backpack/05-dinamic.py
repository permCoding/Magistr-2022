class Dinamic:
    def __init__(self, capacity, items):
        self.capacity = capacity
        self.items = items  # исходная коллекция всех объектов
        self.max_value = 0  # максимальная взятая ценность

    def solve(self):
        amount = len(self.items)  # кол-во объектов
        
        tab = []  # двумерная таблица для динамики
        keys = ['weight', 'value']
        for row in range(self.capacity+1):  # каждая строка таблицы - это свой рюкзак
            tr = [dict(zip(keys, [0,0])) for _ in range(amount)]  # новая строка
            tab.append(tr)  # добавляем в таблицу
            
        col = 0  # формируем левый столбец - индекс объекта col
        for row in range(self.capacity+1):  # по всем строкам - размерам рюкзака
            if row >= self.items[col]['weight']:
                tab[row][col]['weight'] = self.items[col]['weight']
                tab[row][col]['value'] = self.items[col]['value']

        for row in range(self.capacity+1):  # заполняем таблицу по всем рюкзакам
            for col in range(1, amount):  # и по всем объектам
                tab[row][col]['weight'] = tab[row][col-1]['weight']  # переписываем решение слева
                tab[row][col]['value']  = tab[row][col-1]['value']
                
                diff_weight = row - self.items[col]['weight']
                if diff_weight >= 0:  # если можно отступить назад по весу
                                      # то нужно выбрать лучшее из left и up
                    up = tab[diff_weight][col-1]  # решение сверху
                    if up['value'] + self.items[col]['value'] > tab[row][col]['value']:
                        tab[row][col]['weight'] = up['weight'] + self.items[col]['weight']
                        tab[row][col]['value']  = up['value']  + self.items[col]['value']
        # for i, row in enumerate(tab): print(i, row)
        return tab[self.capacity][amount-1], []  # добавить заполнение списка взятых объектов


if __name__ == "__main__":
    import json
    with open('./json/input30.json') as file:
        data = json.load(file)  # исходные данные
    max_w = 150  # размер ранца
    dinamic = Dinamic(max_w, data)
    max_value, result = dinamic.solve()  # ценность и список id объектов, взятых в рюкзак
    print(f"Максимальная ценность рюкзака: {max_value}")
    print("Объекты в рюкзаке:")
    print(json.dumps(result, indent=4, ensure_ascii=False))
