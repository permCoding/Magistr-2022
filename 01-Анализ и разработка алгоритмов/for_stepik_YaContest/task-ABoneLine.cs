using System;
// using System.Linq;

class MainClass {
    public static void Main (string[] args) {
        string[] arr = Console
            .ReadLine()
            .Split(' ');
        int a = int.Parse(arr[0]);
        int b = int.Parse(arr[1]);
        Console.WriteLine(a + b);
    }
}

