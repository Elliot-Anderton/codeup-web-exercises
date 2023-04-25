(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {
        firstName: 'Elliot',
        lastName: `Anderton`
    }

    console.log(person.firstName)
    console.log(person.lastName)

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = `Hello from ` + person.firstName + ` ` + person.lastName;

    console.log(person.sayHello)

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (shopper) {
        let finalBill = shopper.amount;
        let discountAmount = 0

        console.log(shopper.name);
        console.log(`Amount before discount is $${finalBill}`);

        if (finalBill > 200) {
            discountAmount = finalBill * 0.12;
            finalBill -= discountAmount
        }

        console.log(`Amount discounted is $${discountAmount}`);
        console.log(`${shopper.name} owes $${finalBill}`)
    })
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    // let books = [
    //     {title: `The Maze Runner`,
    //         author: {
    //         firstName: `James`,
    //         lastName: `Dashner`,
    //         }
    //     },
    //     {title: `Living Books: Experiments in PostHumanities`,
    //         author: {
    //             firstName: 'Janneke',
    //             lastName: `Adema`,
    //         }
    //     },
    //     {title: `Bee Basics: An Introduction To Our Native Bees`,
    //         author: {
    //             firstName: `Stephen`,
    //             lastName: `Buchmann`,
    //         }
    //     },
    //     {title: `The Book`,
    //         author: {
    //             firstName: `Amaranth`,
    //             lastName: `Borsuk`,
    //         }
    //     },
    //     {title: `Three Lines in a Circle: The Exciting Life of the Peace`,
    //         author: {
    //             firstName: `Micheal`,
    //             lastName: `Long`,
    //         }
    //     }
    // ]

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    // books.forEach(function (book) {
    //     console.log(`Book #${books.indexOf(book) + 1}`);
    //     console.log(`Title: ${book.title}`);
    //     console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
    // })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook ($title, $author) {
        let book = {};
        book.title = $title;
        book.author = {};

        let authorarray = $author.split(' ');
        book.author.firstName = authorarray[0];
        book.author.lastName = authorarray[authorarray.length - 1];

        if (authorarray.length > 2) {
            let middleArray = authorarray.slice(1, authorarray.length - 1);
            book.author.middleName = middleArray.join(' ');
        }
        return book;
    }


    let books = [];
    books.push(createBook(`The Maze Runner`, `James Dashner`));
    books.push(createBook(`Living Books: Experiments in PostHumanities`, `Janneke Adama`));
    books.push(createBook(`Bee Basics: An Introduction To Our Native Bees`, `Stephen Buchmann`));
    books.push(createBook(`The Book`, `Amaranth Borsuk`));
    books.push(createBook(`Three Lines in a Circle: The Exciting Life of the Peace Symbol`, `Micheal G. Long`));

    function showBookInfo(book) {
        console.log(`Book #${books.indexOf(book) + 1}`);
        console.log(`Title: ${book.title}`);
        if (typeof book.author.middleName === 'string') {
            console.log(`Author: ${book.author.firstName} ${book.author.middleName} ${book.author.lastName}`)
        } else {
            console.log(`Author: ${book.author.firstName} ${book.author.lastName}`)
        }
    }

    books.forEach(function (book) {
        showBookInfo(book)
    })
})();
