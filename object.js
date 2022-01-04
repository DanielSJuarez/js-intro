(function () {
    ("use strict");

    const body = document.querySelector("body");
    //////////////////////////////////////////////////////// OBJECT 1
    function object1() {
        const section = document.createElement("section");
        body.appendChild(section);

        let cat = {
            name: 'Bertie',
            breed: 'Cymric',
            color: 'white',
            greeting: function () {
                console.log('Meow!');
            }
        }

        // Put your code here
        const catName = cat['name'];
        cat.greeting();
        cat.color = 'black';



        // Don't edit the code below here

        let para1 = document.createElement('p');
        let para2 = document.createElement('p');

        para1.textContent = `The cat's name is ${catName}.`;
        para2.textContent = `The cat's color is ${cat.color}.`;

        section.appendChild(para1);
        section.appendChild(para2);


    }
    object1();

    //////////////////////////////////////////////////////// OBJECT 2
    function object2() {
        const section = document.createElement("section");
        body.appendChild(section);

        // Put your code here
        let favoriteBand = {

            name: 'Post Malone',
            nationality: 'USA',
            genre: 'Hip-Hop',
            members: 1,
            formed: 2015,
            split: false,
            albums: [
                {
                    name: "Hollywood's Bleeding",
                    released: 2019
                }
            ],
            [
                {
                    name: "Stoney",
                    released: 2016
                }
            ],
        }


        let bandInfo = `${favoriteBand.name} is an ${favoriteBand.nationality} artist 
            that began singing in ${favoriteBand.formed} in the ${favoriteBand.genre} genre. ${favoriteBand.name} has 
            released a few albums including ${favoriteBand.albums[0][0]} release in and ${favoriteBand.albums[0][1]} 
            and ${favoriteBand.albums[1][0]} release in and ${favoriteBand.albums[1][1]}.`;

        // Don't edit the code below here

        let para1 = document.createElement('p');
        para1.textContent = bandInfo;
        section.appendChild(para1);

    }
    object2();

    //////////////////////////////////////////////////////// OBJECT 3
    function object3() {
        const section = document.createElement("section");
        body.appendChild(section);

        let cat = {
            name : 'Bertie',
            breed : 'Cymric',
            color : 'white',
            greeting: function() {
              console.log(`Hello, said ${cat.name} the ${cat.breed}`);
            }
          }

          let cat2 = {
            name : 'Izzy',
            breed : 'mut',
            color : 'gray',
            greeting: function() {
              console.log(`Hello, said ${cat2.name} the ${cat2.breed}`);
            }

        }
        
    object3();


})();
