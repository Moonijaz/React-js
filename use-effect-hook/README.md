 In React, the useEffect hook is like a scheduler . It helps you run side effects in your components, like fetching data from a server, subscribing to a data stream, or manually changing the DOM.
## Why Do We Use useEffect?
1. Running Code After Render: Sometimes you need to run some code after your component has rendered. For example, you might want to fetch data from an API right after your component is displayed on the screen.

2. Cleaning Up:  When your component is no longer needed, you might need to clean up, like unsubscribing from a data stream or clearing a timer. The useEffect hook can help with that too.

### Example with a Simple Clock
Let's imagine we want to create a clock that shows the current time and updates every second. We'll use the "useEffect" hook to handle the side effect of setting up a timer.

## Steps to Use useEffect: 
1. Import the useEffect Hook:
 First, you need to import the useEffect hook from React.
2. Create an Effect:
 Inside your component, use the useEffect hook to define what side effect you want to run.
3. Clean Up: If your effect creates something that needs to be cleaned up, like a timer, you can return a cleanup function from useEffect.