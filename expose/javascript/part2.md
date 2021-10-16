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