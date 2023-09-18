const get_pi_step = (count) => {
    let x, y;
    let count_circle = 0
    for (let step=1; step<=count; step++) {
        x = Math.random(), y = Math.random()
        if (x**2 + y**2 <= 1) {
            count_circle++
        }
        if (step%100_000_000 == 0) {
            console.log(step, 4*count_circle/step)
        }
    }
}

console.clear()
get_pi_step(1_000_000_000+1)


/*
____1_000_000 3.14_0328
___40_000_000 3.141_0718
1_000_000_000 3.14159_5552
*/
