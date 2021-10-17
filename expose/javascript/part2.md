1. Line 12 will print '3' to the screen because 'var i' was initialized within for-loop creation, but since it's a var it can be accessed outside
   of the loop. And since the length of the array passed was 3, i will end at 3 after it's done incrementing.
2. Line 13 will print '150' since discountedPrice is a var and therefore can be accessed outside of the for-loop it was decalred in. It will hold 150 because the last item in the array is 300, and when multiplied by 1-discount we get 150.
3. Line 14 will print '150' because finalPrice is called within the same scope as where it was declared in. It also prints 150 becauase it takes the number discountedPrice 150 (explained in #2), multiplies it by 100, divides it by 100, then rounds it.
4. The function will return an array containing [50, 100, 150] because 'discounted' is accessed within the same scope as it was declared in. It returns this array because the loop takes each item of the parameter array, halves it, and then rounds it.
5. Line 12 will print an error message:
   > "Uncaught ReferenceError: i is not defined"

   An error occured because i is a 'let' variable declared during the for-loop creation, so it can only be accessed within that scope.
6. Line 13 will print an error message:
   > "Uncaught ReferenceError: discountedPrice is not defined"

    An error occured because 'discountedPrice' is a 'let' variable declared inside the for-loop, so it cannot be accessed outside of the loop scope.
7. Line 14 will print '150' because even though it's a 'let' variable, it's being called within the same scope as it was declared in, so it can still be accessed.
8. The function will return an array containing [50, 100, 150] because 'discounted' is accessed within the same scope as it was declared in, which 'let' allows.
9. Line 11 will print an error message:
   > "Uncaught ReferenceError: i is not defined"

   An error occured because i is a 'let' variable declared during the for-loop creation, so it can only be accessed within that scope.
10. Line 12 will print '3' because 'length' is a const variable, meaning it cannot be reassigned and must be accessed within the same scope as it was declared in, which it is.
11. The function will still return an array containing [50, 100, 150] because even though 'discounted' is a const, it's being filled rather than reassigned. The loop simply filled the existing empty array, it is not being assigned to something new.
12. A. student.name;
    
    B. student['Grad Year']

    C. student.greeting()

    D. student['Favorite Teacher'].name

    E. student.courseLoad[0]
13. Arithmetic
    A. '32' because after reading +, 2 is mapped to its string representation '2', and was added to the '3' string to get a whole string of '32'
    B. 1 because after reading -, it converts '3' to its number representation and then minuses 2.
    C. 3 because null maps to 0, so 3 + 0 is 3
    D. '3null' because it maps null to a string representation 'null' and adds it to '3' to get a whole '3null' string
    E. 4 because true maps to 1, so 1 + 3 = 4
    F. 0 because false maps to 0, and null maps to 0, so 0 + 0 = 0
    G. '3undefined' because + converts undefined to a string 'undefined' to create one whole string '3undefined'
    H. NaN because after reading -, it converts '3' to 3, and converts undefined to NaN. So 3 - NaN = NaN

14. A. true because it maps '2' to the number 2, and compares that to 1
    B. false because when comparing strings, it uses a lexigraphical approach. So first it will check the first characters, where '2' is not less than '1', so it will return false.
    C. true because == uses type conversion, so it converts the '2' to a 2
    D. false === doesn't use type conversion. since 2 and '2' are different types, it will return false
    E. false because true maps to 1, which is not 2
    F. true because the Boolean() conversion converts any "empty" value (like 0, null, undefined, NaN) to false, and all other values to true. So Boolean(2) is simply true since it's not an empty value.

15. The difference between the == and === operators is that == compares with type conversion. So 1 == true would be true, because it converts true to a 1. On the other hand, === compares without type conversion, so 1 === true would give false because they are different types (1 is a number and true is a boolean).

17. The result will be [2,4,6]. I got this result because [1,2,3] is passed to the function modifyArray, which will loop through that array and pass each item to the doSomething function (which was passed to modifyArray and held within the callback parameter). This function will double the item value and return it back, where it will be pushed onto a new array that was made within modifyArray. Then that new array is returned, so the entire line 'modifyArray([1,2,3], doSomething)' holds the array value [2,4,6].

19. The output of the code is 1 3 2 because first the 1 is simply printed. Then it sets the time when to execute the function printing 2 to wait 1000 milliseconds (1sec). And it sets the function printing 3 to wait 0 milliseconds, which is why 3 is printed right after 1 and it takes a full second for 2 to print, thus printing after 3.


