# Full-Stack-Study
## Recommended learning order
- ✅ HTML + CSS + JS (2-4 weeks)
- ✅ React (2-3 weeks, Small projects)
- ✅ TypeScript (1-2 weeks，Combined with React)
- ✅ Next.js(1-2 weeks， Full-stack small application)
- ✅ Advanced & Project Practice (Continuous Improvement)

### CSS Essentials
- Box Model: content + padding + border + margin
- Flexbox (display: flex): Commonly used for horizontal and vertical centering
- Grid (display: grid): Complex page layouts
- Responsive: Media queries @media, percentages/vh/vw

### JS keys
JavaScript Asynchronous & Event Loop — Bilingual Summary

1️⃣ Single Thread & Asynchronous Model

JavaScript is single-threaded, it can only execute one task at a time.

To prevent blocking during long operations (like network or I/O), JS uses the Event Loop to achieve asynchronous execution.
Asynchronous tasks are delegated to browser/Node APIs and, once completed, are queued for scheduling without blocking the main thread.

2️⃣ Event Loop Mechanism

```
while (true) {
  ①  Execute one macrotask
  ②  Execute all microtasks
  ③  Perform rendering if needed
  ④  Next iteration
}
```

🧭 Each event loop tick:
Pick and execute one macrotask
Flush all microtasks
Perform rendering if applicable

3️⃣ Order of Execution: Sync → Microtasks → Macrotasks

Execution order:
Synchronous → Current microtasks → Next macrotask → Next microtasks → …

4️⃣ Microtasks
Microtasks run right after the current macrotask ends, before any new macrotask starts.

5️⃣  Macrotasks
Macrotasks are the main tasks in each event loop tick.

Multiple macrotasks are queued FIFO. Each tick executes one macrotask, then flushes microtasks, then picks the next macrotask.

6️⃣ Promise 的本质

Promise Basics

Promise （pending / fulfilled / rejected）。
A Promise is just an asynchronous state container.

.then() / .catch() / .finally() 
Callbacks registered by .then() are microtasks.

resolve() 
When resolve() happens determines when the microtask is queued.

7️⃣ async / await 

The Nature of async/await

```
async function foo() {
  console.log('1');
  await somePromise;
  console.log('2');
}
Equivalent to 👇
function foo() {
  console.log('1');
  return Promise.resolve(somePromise)
    .then(() => {
      console.log('2');
    });
}
```

await pauses the function, and resumes by queuing the rest of the code as a microtask once the promise resolves.



One-sentence takeaway

📌 JavaScript asynchronous = single thread + event loop + task queues.

📌 async/await is just syntactic sugar for Promises; await is essentially Promise.then + microtask resumption.

