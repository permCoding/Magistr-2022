import java.util.Scanner;
import java.util.Arrays;

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
