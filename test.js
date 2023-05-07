let obj = {
    a: {
      b: {
        c: {
          d: "hello",
          e: {
            f: "world",
            g: {
              h: "!",
              i: {
                j: "Nice to meet you",
                k: {
                    l: 'welp, i dug deeper'
                }
              }
            }
          }
        }
      }
    }
  };
  
  function findInnermost(obj) {
    let innermostObjects = [];
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        let innerObjects = findInnermost(obj[key]);
        if (innerObjects.length === 0) {
          innermostObjects.push(obj[key]);
        } else {
          innermostObjects = innermostObjects.concat(innerObjects);
        }
      }
    }
    return innermostObjects;
  }
  
  let innermostObjs = findInnermost(obj);
  let innermostValues = innermostObjs.map(obj => obj[Object.keys(obj)[0]]);
  console.log(innermostValues); // Output: ["hello", "world", "!", "Nice to meet you"]
  