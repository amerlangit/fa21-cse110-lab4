1. values added: 20
2. final result: 20
3. values added: 20
4. Error message: 
   > "<a class='gotoLine' href='#50:33'>50:33</a> Uncaught ReferenceError: result is not defined"
There is an error because 'result' was declared inside the if-block. 'let' variables cannot be accessed outside of the block it was declared in.
5. Error message:
   > "<a class='gotoLine' href='#46:12'>46:12</a> Uncaught TypeError: Assignment to constant variable."
There is an error because 'result' cannot be reinitialized since it is a 'const' variable.
6. Error message:
   > "<a class='gotoLine' href='#46:12'>46:12</a> Uncaught TypeError: Assignment to constant variable."
There is an error because 'result' cannot be reinitialized since it is a 'const' variable.