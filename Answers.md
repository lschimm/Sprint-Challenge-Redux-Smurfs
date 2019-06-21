1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Map, filter, reduce, and concat

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do?
    actions: literal actions (or inputs)
    reducers: reduces the actions and initial state (of the store) to work in the final state
    store: a state container.

Why is the store known as a 'single source of truth' in a redux application?
I think because it's a bit more streamlined. In react, theres a lot of different data inside components. Redux keeps more of a 'single source' of it.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is immutable

1)  What is middleware?
    a function that returns a function...that returns a function.

1)  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Thunk is a middleware that allows us to use promises

1)  Which `react-redux` method links up our `components` with our `redux store`?
