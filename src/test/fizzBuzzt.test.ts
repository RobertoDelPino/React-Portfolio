describe("FizzBuzz", () => {

    it("should return 1 when 1", () => {
        const result = fizzBuzz(1);
        expect(result).toBe(1);
    });

    it("should return Fizz when 3", () => {
        const result = fizzBuzz(3);
        expect(result).toBe("Fizz");
    });
    
    it("should return Buzz when 5", () => {
        const result = fizzBuzz(5);
        expect(result).toBe("Buzz");
    });

    it("should return fizzBuzz when 15", () => {
        const result = fizzBuzz(15);
        expect(result).toBe("FizzBuzz");
    });
});

function fizzBuzz(number: number): string | number {
    if(number % 3 == 0 && number % 5 == 0){
        return "FizzBuzz";
    }

    if(number % 3 == 0){
        return "Fizz";
    }

    if(number % 5 == 0){
        return "Buzz";
    }

    return 1;
}