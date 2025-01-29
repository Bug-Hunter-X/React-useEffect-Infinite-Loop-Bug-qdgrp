```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Now the effect only runs when the count changes
    console.log("Count updated!");
  }, [count]);

  return <div>Count: {count}</div>;
}
```