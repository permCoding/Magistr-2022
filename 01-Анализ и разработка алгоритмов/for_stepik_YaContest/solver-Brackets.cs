using System;
using System.Collections.Generic;
public class MainClass
{
            public static Dictionary<char, char> closeOpenBrackets = new Dictionary<char, char>()
        {
            [')'] = '(',
            [']'] = '[',
            ['}'] = '{'
        };

        public static bool IsBracketRight(string text)
        {
            var brackets = new Stack<char>();
            var openBrackets = new HashSet<char>() { '(', '{', '[' };
            foreach (var charac in text)
            {
                if (openBrackets.Contains(charac))
                {
                    brackets.Push(charac);
                }
                else if (closeOpenBrackets.ContainsKey(charac))
                {
                    if (brackets.Count == 0 || brackets.Pop() != closeOpenBrackets[charac])
                    {
                        return false;
                    }
                }
            }
            return brackets.Count==0;
        }
    public static void Main()
    {
            var text = Console.ReadLine();
            if(!IsBracketRight(text))
            {
                Console.WriteLine("Not Success");
            }
            else
            {
                Console.WriteLine("Success");
            }
    }
}
