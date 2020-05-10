// If I gave you 20 books to alphabetize, how would you do it?
// Write an algorithm to implement this.

// I would first put them into stacks in order by the first letter and then sort the stacks by 2nd letter, etc... Then finally merge the stacks into a final order.

function sortBooks(booksArray) {
    // make an array of buckets, length 26 (number of letters in the alphabet)
    let buckets = new Array(26);
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }
    // console.log(booksArray[0].charCodeAt(0));
    for (let i = 0; i < booksArray.length; i++) {
        // Make sure first letter is uppercase
        let book = booksArray[i].charAt(0).toUpperCase() + booksArray[i].slice(1);
        // Get utf code for first letter of book name
        let firstLetter = book.charCodeAt(0);
        // put book in bucket according to first letter of name
        buckets[firstLetter - 65].push(book);
    }
    // sort the buckets
    buckets.forEach((array) => {
        array.sort()
    });
    // merge buckets
    buckets = buckets.flat();
    return buckets;
}

console.log(sortBooks(["Alice in Wonderland", "Adventures of Huckleberry Finn, The", "In Search of Lost Time", "Ulysses", "don quixote", "Great Gatsby, The", "One Hundred Years of Solitude", "Moby Dick", "war and Peace", "Lolita", "Hamlet", "Catcher in the Rye, The", "Odyssey, The", "Brothers Karamazov, The", "Crime and Punishment", "Madame Bovary", "Divine Comedy, The", "Pride and Prejudice", "Wuthering Heights", "Catch-22"]));