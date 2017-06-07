## Written Portion (40 min)
This part of the test is closed book!

1. You've started a project in JavaScript, but for some reason your runtime lacks the `map` function! Attach one to the `Array` prototype!

```js

/* As a reminder, `map` takes a callback function and returns a *new* array, with each new value created by the output of the callback function. So:

const arr = [1,2,3];
arr.map((val) => val * val) // [1,4,9]

*/



```

Please write your answer [here](./map.js)

2. What is a React `component`?

---
> a React component is a concept of React where you can separate pieces of your application into manageable pieces. The component returns generated markup to it's parent to be rendered to the browser, this markup is a single an element (that could have children) that is readable by the browser. This react component can receive props from its parent that.

There are two different types of React components - class based (smart) components and simple function (dumb) components. See more explaination of these in Q3
---

3. You can define a React component a few different ways, including (1) as a simple function or (2) as a class that extends the `Component` piece of the React library. How should you decide when to use which syntax?

---
> I would first start with a simple function component and if my component has the need to:
1. maintain and use state
2. use react lifecycle hooks
This means I need a class based component.. I would then 'upgrade' that component to a class-based 'smart' component, extending the Component in the react library.
the reason to start with a simple function component is to avoid bloating our app and using up more memory / writing code than we need
---

4. Please transpile the following JSX code into JavaScript that the browser can understand:

```js
<div>
    <h1 className='headline'>Hello Dojo!</h1>
</div>
```

---
> React.createElement('div', null, () => {
    return React.createElement('h1', 'headline', () => {
        return 'Hello Dojo!'
    });
});
---

5. Reverse an array. Write a function that accepts an array and returns *the same array* with the values reversed.

```js
const arr = [1,2,3];
reverseArr(arr);
console.log(arr) // [3,2,1];
```

Please write your answer [here](./reverseArr.js)

6. How does using the `new` keyword affect a function's behavior in JavaScript?

---
> The function will 
    1. implicity create a new object in scope of the function
    2. 'This' keyword will be made available bound to the new object
    3. Then, implicity return the new object at the end of the function
---

7. What is the best thing?
* A) Callbacks
* B) Objects
* C) Promises
* D) Pushing to Github

---
> A, B, C... and D???  I love it all! :-)
---

Done! Time to start the [React app](./app-details.md)!