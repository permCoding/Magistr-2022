
Некоторые варианты решения задачи про два круга:  

---  

```py
a = list(map(int, input().split()))
b = list(map(int, input().split()))

x1, y1, r1 = a[0], a[1], a[2]
x2, y2, r2 = b[0], b[1], b[2]

dist = ((x1-x2)**2 + (y1-y2)**2)**.5
 
print(not(dist > r1+r2 or dist + min(r1,r2) < max(r1,r2)))
```

---  

```py
x1, y1, r1 = map(int, input().split())
x2, y2, r2 = map(int, input().split())

dist = ((x1-x2)**2 + (y1-y2)**2)**.5
 
print( dist <= r1+r2 and dist + min(r1,r2) >= max(r1,r2) )
```

---  

```js
const lines = require('fs').readFileSync(0, 'utf8').split('\n');

const [x1, y1, r1] = lines[0].split(' ').map(Number);
const [x2, y2, r2] = lines[1].split(' ').map(Number);

let dist = ( (x1 - x2) ** 2 + (y1 - y2) ** 2 ) ** .5;
a = dist <= r1 + r2;
b = Math.max(r1, r2) <= dist + Math.min(r1, r2);

console.log( a && b ? 'True' : 'False');
```

---  

```cs
using System;
using System.Linq;
using System.Collections.Generic;

public class MainClass
{
    public static void Main()
    {
        List<int> cle1 = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
        List<int> cle2 = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
        
        double dist = Math.Sqrt(Math.Pow(cle1[0]-cle2[0], 2) + Math.Pow(cle1[1]-cle2[1], 2));
        
        bool a = dist > cle1[2] + cle2[2];
        bool b = Math.Max(cle1[2], cle2[2]) > dist + Math.Min(cle1[2], cle2[2]);
        
        Console.WriteLine( !(a || b)? "True": "False");
    }
}
```

---  
