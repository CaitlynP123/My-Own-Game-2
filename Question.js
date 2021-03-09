class Questions{
    constructor(){

        this.q
        this.options1
        this.options2
        this.options3
        this.options4
        this.correct

        this.heading

        this.output = createElement('h2')
    
    }

hides(){
    console.log("working")

    this.q = ""
    this.options1 = "" 
    this.options2 = "" 
    this.options3 = "" 
    this.options4 = "" 
    this.correct = "" 

    this.heading.hide()
    this.output.hide()
    
    
}    

    allQuestions(){
        var r
        if(frameCount%3000==0){
         r = Math.round(random(1,42))
         switch(r){
            case 1 : this.q = "What does the word 'thy' mean?"
                        this.options1 = "You"
                        this.options2 = "Them"
                        this.options3 = "Your"
                        this.options4 = "They"
                        this.correct = 3
            break            
            case 2 : this.q = "Who wrote Romeo and Juliet?"
                        this.options1 = "Jules Verne"
                        this.options2 = "William Shakespeare"
                        this.options3 = "Robert Frost"
                        this.options4 = "Robert Herrick"
                        this.correct = 2
            break          
            case 3 : this.q = "Who wrote the historical fiction 'The Boy in Striped Pajamas'?"
                        this.options1 = "Veronica Roth"
                        this.options2 = "Suzanne Collins"
                        this.options3 = "Rick Riordan"
                        this.options4 = "John Boyne"
                        this.correct = 4
            break            
            case 4 : this.q = "What is a thesaurus?"
                        this.options1 = "A guide containing synonyms to various words"
                        this.options2 = "A synonym of Dictionary"
                        this.options3 = "A type of dinosaur"
                        this.options4 = "A spelling and pronunciation guide"
                        this.correct = 1
            break            
            case 5 : this.q = "What does the word 'Literature' mean?"
                        this.options1 = "All given options"
                        this.options2 = "Written works, especially those considered of superior or lasting artistic merit"
                        this.options3 = "Books and writings published on a particular subject"
                        this.options4 = "Leaflets and other printed matter used to advertise products or give advice"
                        this.correct = 1
            break          
            case 6 : this.q = "Who wrote the Hunger Games Trilogy'?"
                        this.options1 = "Veronica Roth"
                        this.options2 = "Suzanne Collins"
                        this.options3 = "Stephanie Maeyers"
                        this.options4 = "J.K. Rowling"
                        this.correct = 2
            break            
            case 7 : this.q = "What is an adjective?"
                        this.options1 = "A word used to describe a property of something"
                        this.options2 = "A type of noun"
                        this.options3 = "A mathematical term"
                        this.options4 = "A compliment"
                        this.correct = 1
            break
            case 8 : this.q = "How many states does australia have??"
                        this.options1 = "10"
                        this.options2 = "35"
                        this.options3 = "7"
                        this.options4 = "29"
                        this.correct = 3
            break            
            case 9 : this.q = "How many Union territories does India Have?"
                        this.options1 = "29"
                        this.options2 = "9"
                        this.options3 = "15"
                        this.options4 = "8"
                        this.correct = 4
            break          
            case 10 : this.q = "Who Invented the 1st car?"
                        this.options1 = "Alexander Graham Bell"
                        this.options2 = "Milton Reeves"
                        this.options3 = "Henry Ford"
                        this.options4 = "Karl Benz"
                        this.correct = 4
            break            
            case 11 : this.q = "How many states does India have?"
                        this.options1 = "29"
                        this.options2 = "28"
                        this.options3 = "5"
                        this.options4 = "8"
                        this.correct = 1
            break            
            case 12 : this.q = "Who assassinated Mahatma Gandhi?"
                        this.options1 = "Nathuram Godse"
                        this.options2 = "Madan Lal Pawah"
                        this.options3 = "Gopal Godse"
                        this.options4 = "Narayan Apte"
                        this.correct = 1
            break          
            case 13 : this.q = "How many countries are there in the World?"
                        this.options1 = "197"
                        this.options2 = "195"
                        this.options3 = "193"
                        this.options4 = "191"
                        this.correct = 2
            break            
            case 14 : this.q = "Who invented the first telephone?"
                        this.options1 = "Alexander Graham Bell"
                        this.options2 = "John Peirce"
                        this.options3 = "Amos Dolbear"
                        this.options4 = "Antonion Meucci"
                        this.correct = 1
            break
            case 15 : this.q = "What is the value of Pi?"
                        this.options1 = "3.41"
                        this.options2 = "4.31"
                        this.options3 = "3.14"
                        this.options4 = "1.34"
                        this.correct = 3
            break            
            case 16 : this.q = "Who Invented the Number 0?"
                        this.options1 = "Leopold Kronecker"
                        this.options2 = "Bhramagumpta"
                        this.options3 = "Euclid"
                        this.options4 = "Aryabhatta"
                        this.correct = 4
            break          
            case 17 : this.q = "Select the Fibonacci Sequence"
                        this.options1 = "1, 2, 3, 4, 5, 6, 7, 8, 9..."
                        this.options2 = "5, 10, 15, 20, 25 30, 35, 40..."
                        this.options3 = "1, 1, 2, 2, 3, 3, 4, 4, 5..."
                        this.options4 = "0, 1, 1, 2, 3, 5, 8, 13, 21..."
                        this.correct = 4
            break            
            case 18 : this.q = "Which alphabet has more uses in Math than it does in English?"
                        this.options1 = "x"
                        this.options2 = "q"
                        this.options3 = "z"
                        this.options4 = "t"
                        this.correct = 1
            break            
            case 19 : this.q = "How many sides does a dodecagon have??"
                        this.options1 = "12"
                        this.options2 = "10"
                        this.options3 = "13"
                        this.options4 = "11"
                        this.correct = 1
            break         
            case 20 : this.q = "Whats a Polygon?"
                        this.options1 = "A name for a cat"
                        this.options2 = "A shape at least 3 straight lines and angles"
                        this.options3 = "A circle"
                        this.options4 = "a shape with 32534 sides"
                        this.correct = 2
            break            
            case 21 : this.q = "Whats the formula for the Area of a square?"
                        this.options1 = "Area = side * side"
                        this.options2 = "Area = 2(a+b)"
                        this.options3 = "Area = MC^2"
                        this.options4 = "Area = a + b + c + d"
                        this.correct = 1
            break
            case 22 : this.q = "How many elements are there in the Periodic table?"
                        this.options1 = "119"
                        this.options2 = "121"
                        this.options3 = "118"
                        this.options4 = "112"
                        this.correct = 3
            break            
            case 23 : this.q = "Who Discovered Gravity?"
                        this.options1 = "George Dantzig"
                        this.options2 = "Albert Einstein"
                        this.options3 = "Stephen Hawking"
                        this.options4 = "Sir Isaac Newton"
                        this.correct = 4
            break          
            case 24 : this.q = "Whats H20"
                        this.options1 = "Lemonade"
                        this.options2 = "Salt"
                        this.options3 = "Gasoline"
                        this.options4 = "Water"
                        this.correct = 4
            break            
            case 25 : this.q = "2 same poles on magnets _______?"
                        this.options1 = "Attract"
                        this.options2 = "Repel"
                        this.options3 = "Are Good friends"
                        this.options4 = "Don't react in any manner"
                        this.correct = 1
            break            
            case 26 : this.q = "Whats a proton?"
                        this.options1 = "A subatomic particle with postive charge"
                        this.options2 = "A subatomic particle with negative charge"
                        this.options3 = "A subatomic particle with neutral charge"
                        this.options4 = "A professor"
                        this.correct = 1
            break         
            case 27 : this.q = "Select a conductor of heat and Electricity?"
                        this.options1 = "Plastic"
                        this.options2 = "Copper"
                        this.options3 = "Glass"
                        this.options4 = "Rubber"
                        this.correct = 2
            break            
            case 28 : this.q = "Who is the father of Physics?"
                        this.options1 = "Galileo Galilei"
                        this.options2 = "Sir Isaac Newton"
                        this.options3 = "ALbert EInstien"
                        this.options4 = "Stephen Hawking"
                        this.correct = 1
            break
            case 29 : this.q = "Who wrote Romeo and Juliet?"
                        this.options1 = "William Wordsworth"
                        this.options2 = "Robert Herrick"
                        this.options3 = "William Shakespeare"
                        this.options4 = "Ray Bradbury"
                        this.correct = 3
            break            
            case 30 : this.q = "Where did Madhubhani painting originate?"
                        this.options1 = "Bihar"
                        this.options2 = "Rajasthan"
                        this.options3 = "Madhya Pradesh"
                        this.options4 = "Kerela"
                        this.correct = 1
            break          
            case 31 : this.q = "Which of these is a medium of art?"
                        this.options1 = "Pen"
                        this.options2 = "Pencil"
                        this.options3 = "Paint"
                        this.options4 = "All given options"
                        this.correct = 4
            break            
            case 32 : this.q = "Who made the starry Night painting?"
                        this.options1 = "Vincent Van Gogh"
                        this.options2 = "Pablo Picasso"
                        this.options3 = "Leonardo Da vinci"
                        this.options4 = "Claude Monet"
                        this.correct = 1
            break            
            case 33 : this.q = "Choose the correct list of different art styles"
                        this.options1 = "Dance, Drama and theatre, Musical arts, Drawing and painting, Literature"
                        this.options2 = "Dance, Drama and theatre, Musical arts, Drawing and painting"
                        this.options3 = "Drama and theatre, Musical arts, Drawing and painting, Literature"
                        this.options4 = "Musical arts, Drawing and painting, Literature, Dance"
                        this.correct = 1
            break         
            case 34 : this.q = "Paintings usig acrylic colors are best made on ________"
                        this.options1 = "Canvas"
                        this.options2 = "Paper"
                        this.options3 = "Glass"
                        this.options4 = "Wood"
                        this.correct = 1
            break            
            case 35 : this.q = "Which Indian composer won the Academy Award for Best music?"
                        this.options1 = "A. R. Rahman"
                        this.options2 = "Sneha Kanwalkar"
                        this.options3 = "Ravi Shankar"
                        this.options4 = "Anu Malik"
                        this.correct = 1
            break 
            case 36 : this.q = "Who is known as the greatest cricketer of all time?"
                        this.options1 = "LeBron James"
                        this.options2 = "Christiano Ronaldo"
                        this.options3 = "Sachin Tendulkar"
                        this.options4 = "Don Bradman"
                        this.correct = 3
            break            
            case 37 : this.q = "Where Cricket is the national sport of which country?"
                        this.options1 = "England"
                        this.options2 = "India"
                        this.options3 = "Pakistan"
                        this.options4 = "Canada"
                        this.correct = 1
            break          
            case 38 : this.q = "Which of them are Badminton players?"
                        this.options1 = "P.V Sindhu"
                        this.options2 = "Serena Williams"
                        this.options3 = "Helen Mayer"
                        this.options4 = "Morgan Pressel"
                        this.correct = 1
            break            
            case 39 : this.q = "What was badminton called before?"
                        this.options1 = "Poona"
                        this.options2 = "Mumbai"
                        this.options3 = "Lonavala"
                        this.options4 = "Whack-a-shuttlecock"
                        this.correct = 1
            break            
            case 40 : this.q = "What is India's National Sport"
                        this.options1 = "Cricket"
                        this.options2 = "Hockey"
                        this.options3 = "Football"
                        this.options4 = "Badminton"
                        this.correct = 2
            break         
            case 41 : this.q = "What sport does Serena Williams play"
                        this.options1 = "Tennis"
                        this.options2 = "Badminton"
                        this.options3 = "Cricket"
                        this.options4 = "Hockey"
                        this.correct = 1
            break            
            case 42 : this.q = "Which of these is NOT an olympic sport?"
                        this.options1 = "Cricket"
                        this.options2 = "Badminton"
                        this.options3 = "Football"
                        this.options4 = "Swimming"
                        this.correct = 1
            break 
        }
    }
        this.display()
}

    display(){
        heading.html("Category")
        heading.position(375,10)

        question.html(this.q)
        question.position(50,100)
    
        
        op1.html(this.options1)
        op1.position(100,130)
    
        op2.html(this.options2)
        op2.position(100,160)
    
        op3.html(this.options3)
        op3.position(100,190)
    
        op4.html(this.options4)
        op4.position(100,220)

        op1.mousePressed(()=>{
            console.log("ww")
            if(1==this.correct){
                this.output.html("Correct! Good Job")
                this.output.position(width/2, height/2)
                this.nextButton()
            } else{
                this.output.html("Oops! Inorrect")
                this.output.position(width/2, height/2)
                this.nextButton()
            }
        }) 
          
        op2.mousePressed(()=>{
            if(2==this.correct){
                this.output.html("Correct! Good Job")
                this.output.position(width/2, height/2)
                this.nextButton()
            } else{
                this.output.html("Oops! Inorrect")
                this.output.position(width/2, height/2)
                 this.nextButton()
            }
        })

        op3.mousePressed(()=>{
            if(3==this.correct){
                this.output.html("Correct! Good Job")
                this.output.position(width/2, height/2)
                this.nextButton()
            } else{
                this.output.html("Oops! Inorrect")
                this.output.position(width/2, height/2)
                this.nextButton()
            }
        })

        op4.mousePressed(()=>{
            if(4==this.correct){
                this.output.html("Correct! Good Job")
                this.output.position(width/2, height/2)
                 this.nextButton()
            } else{
                this.output.html("Oops! Inorrect")
                this.output.position(width/2, height/2)
                 this.nextButton()
            }
        })

    }

    nextButton(){
        console.log("working")
        next = createButton("next")
        next.position(width/2, height/2)

        next.mousePressed(()=>{
            resetState()
        })
    }
}