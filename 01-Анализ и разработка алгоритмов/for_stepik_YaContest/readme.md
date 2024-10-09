Будем решать задачи - писать программы и подавать код в автоматизированнную систему проверки решений - Yandex Contest.  

Некоторые пояснения:  

- Чтобы зайти в систему нужно будет авторизоваться в браузере:  
  -- либо через Логин/Пароль - выдаёт преподаватель  
  -- либо через ID Яндекса  
- Задачи не обязательно решать последовательно. Задачи можно пропускать.  
- После подачи решения не обязательно дожидаться итогов проверки - можно переходить к следующей задаче.  
- В систему можно загружать файл с кодом с Вашего компьютера или просто копировать код в окно ввода решения.  
- Чем больше задач успеете решить и чем меньше времени на это потратите, тем выше Ваше место в итоговом распределении.  

---  

**Пробный тур:**  

- простые задачи, чтобы проверить как это работает  
- ссылка для входа: https://contest.yandex.ru/contest/27283/  

**Основной тур:**  

- простые задачи, на знание базового синтаксиса языка  
- ссылка для входа: https://contest.yandex.ru/contest/19616/  

---  

В этой директории примеры оформления программного кода  
для подачи решений в Yandex Contest или Stepik  

---  

> ЗАДАЧА (это пример):  
> на вход в программу подаётся одна строка  
> в строке через пробел записаны два натуральных числа  
> найти сумму чисел  

РЕШЕНИЯ (возможные варианты оформления кода):  

```py
# py
a, b = map(int, input().split())
print(a + b)
```

```py
# py
print(sum(map(int, input().split())))
```

```js
// js
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = []; // массив для хранения считываемых строк

rl
    .on('line', line => lines.push(line)) // считать все строки в массив
    .on('close', () => { // после окончания считывания обработать массив
        let arr = lines[0].split(' ');
        console.log(Number(arr[0]) + Number(arr[1]));
});
```

```js
// js
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = []; // массив для хранения считываемых строк

rl.on('line', line => lines.push(line)); // считать все строки в массив

rl.on('close', () => { // после окончания считывания обработать массив
    console.log(
        lines[0].split(' ').map(x => +x).reduce((a,b) => a+b)
    );
});
```

```cs
// cs for dotnet > 5.0
string[] arr = Console.ReadLine().Split(' ');
int a = int.Parse(arr[0]);
int b = int.Parse(arr[1]);
Console.WriteLine(a + b);
```


```cs
// cs
using System;

class Program {
    public static void Main (string[] args) {
        string[] arr = Console
            .ReadLine()
            .Split(' ');
        int a = int.Parse(arr[0]);
        int b = int.Parse(arr[1]);
        Console.WriteLine(a + b);
    }
}
```

```cs
// cs
using System;
using System.Linq;

class Program {
    public static void Main (string[] args) {
        Console.WriteLine(
            Console
                .ReadLine()
                .Split(' ')
                .Select(int.Parse)
                .Aggregate((x,y) => x + y)
        );
    }
}
```

```java
import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    String[] items = scan.nextLine().split(" ");
    int a = Integer.parseInt(items[0]);
    int b = Integer.parseInt(items[1]);
    System.out.println(a + b);
    scan.close();
  }
}
```

```java
import java.util.Scanner;
import java.util.Arrays;

class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String[] items = scan.nextLine().split(" ");
        int result = Arrays
            .stream(items)
            .mapToInt(Integer::parseInt)
            .sum();
        System.out.println(result);
    }
}
```

---  

> ЗАДАЧА (это другой пример):  
> На вход подаются две строки,  
> в каждой целое число в диапазоне от 1 до 10000 включительно.  
> Найдите сумму этих чисел.  

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        System.out.println(a + b);
    }
}
```

---  
