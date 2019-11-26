# Dwarf-Match


<img src="https://cdn.imgbin.com/25/17/4/imgbin-the-hobbit-thorin-oakenshield-dwarf-the-hobbit-NJS5Yzt6DcTvjFeqbcnpxBRep.jpg"/>

<hr>
In this project you will be building a familiar card game with Vanilla JS MVCs and a fantasy twist!

Most of the legwork has already been completed, you don't need to worry about how the cards animate, or putting the cards on the screen. all we need to worry about is the game logic and telling the cards when to flip over.
<hr>

<h2>Goals</h2>
In this checkpoint students will demonstrate their understanding of working with the DOM and dynamically rendering data to the page. They will be responsible for writing functions to handle input, follow the MVCs pattern, and manipulate the DOM based off given input.


<hr>


### Step 1. Flipping Cards Loading up our game as-is will simply display a grid of face down cards. Clicking on them doesn't do anything. Let's change that!

Let's open up the `style.css` and card model to take a look at how our cards are displayed
Hint: check the card class
We have an idea of how to flip the card now, but we have some groundwork to lay first. Start on your `selectCard` function to get your template to return the class `flipped`.

<hr>

### Step 2. Adding Flip Control Fancy! Now we've got our cards flipping over, but we've created two new problems, we can flip over too many at once and they won't flip back! Let's take care of the former first.

Back into the service we go! Why don't we take a look at the `unflipCards` function?

We have a few functions to play with, let's start by thinking about the order in which functions should run and then about putting all of them together.

<hr>

### Step 3. selectCard

After we flip our card let's make an if statement that asks if we've assigned anything to our first card variable
if there isn't, let's store our current card and return
if there is then we should see if our second card variable has anything
if it doesn't, then let's fill it with our currently selected card and check to see if our cards are a match, thankfully we already wrote a function to test exactly this!
if there's a match we should reset our selected cards
if there's not a match then we need to flip our cards back over and then reset our card variables.
Let's test it!

<hr>

Uh oh, it looks like it's broken! The first card flips but the second one doesn't unless it's a match! Or does it? What's actually happening is that the second card is being set back to false before the animation can even start! That's no good! We need a way to delay the flips.

Our next step is going to use the `setTimeout()` function. Standard syntax for `setTimeout()` looks like this:

```js
setTimeout(() => {
    // someCode
}, delayInMiliseconds);
```
Where // someCode is the code you want to execute after `delayInMilliseconds` For our purposes, 1000 milliseconds should suffice.

Let's wrap up our last bit of code setting the cards.show in a `setTimeout()` and give it another test run.

<hr>

### Step 4. Bug Fixes Alright! The game is mostly functional, but you may have noticed some bugs features, such as being able to flip our matched cards back over, or being able to flip too many cards at once.

We can fix both of these issues pretty easily, to prevent selecting cards that are already flipped face up we can simply short-circut the `selectCard` function with an if statement that checks if the card being passed to `selectCard()` is face up. If it is, just return!

Now that we can't select face up cards, let's fix having too many cards face up at once.

An easy way to fix this is to check if your stored cards currently have a value, if both cards have a value, return and dont allow the selection.

<hr>

### Step 5. Victory Conditions Now the game functions pretty well, but we don't have a win condition.

Let's dive back into the services and create a `checkVictory` function.

Our new `checkVictory()` function would probably work best if called when we have a match. Insert it and let's give the game a final run!
