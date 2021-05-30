# Self Care Center - Module 1 Solo Project
## Overview
> How can I care for myself? One way is with affirmations and mantras!

This solo project challenge required the author to build an app page that 'helps users remind themselves of their inherent value' by providing a random item from a list of mantras and affirmations. Page layout and design was to match the comp image provided with the project specifications.

## What does it do?
The basic requirements of this app require it to do the following:

- When a user selects a message option and then clicks the “Receive Message” button, the user sees a random message from the list of possible messages for that category.
- When the message appears, the mediation icon disappears from the message area.

The following additional requirements were chosen by the author to meet the remaining project requirements:

- Use JavaScript to ensure that the user never sees a repeated message until they’ve seen them all.
- After they’ve seen them all they should be notified that they will now start seeing repeat messages.

Finally, these features were added to improve the user experience:
- The user can click on either the radio button selector or the associated text label to select that message option.
- If the user clicks the "Receive Message" without selecting one of the two message options, a message will appear asking them to make a selection.
- If a user moves from mantras to affirmations (or vice versa) when they switch back the list will continue from where they left off.

## How to Use
You can try the finished page at the [deploy link](https://ericsergeant.github.io/self-care-center/).

When the user opens the page, the list of available mantras and affirmations will be randomized.  To receive a message, the user selects the radio button or label associated with either mantras or affirmations and clicks the "Receive Message" button.  The mediation icon will disappear and their mantra or affirmation will appear in its place.

![gif of self care page use clicking on buttons](https://media.giphy.com/media/chxUap8ZYhdrfcNZQk/giphy.gif "Self Care page use")

If the user neglects to first select either mantra or affirmation, the message will remind them to make a choice.

![image of reminder](https://github.com/EricSergeant/self-care-center/blob/main/Reminder%20message%20screenshot.png "Remind to click selector")

The user can continue to receive messages by clicking the "Receive Message" button and can change between mantras and affirmations at any time.  When the final mantra or affirmation in the randomly-shuffled has been displayed, the user will see a message that they've now seen all sayings and that further clicks of the "Receive Message" button will start displaying messages they've already seen.

![image of ending message](https://github.com/EricSergeant/self-care-center/blob/main/Final%20message%20screenshot.png "Final message note")

## Building and Deploying...
The code for this project was written in Atom, to meet the required specifications of the project and to match the design/layout as closely as possible to the comp. It was written in HTML, CSS, JavaScript, and markdown.  The [deploy link](https://ericsergeant.github.io/self-care-center/) is available for viewing the page.

## Contributions
The specifications for this project can be found [here](https://frontend.turing.io/projects/module-1/self-care-center.html).  

A comp was provided as a reference guide for layout and design, along with the mediation icon. Mantras and affirmations were (mostly) provided as part of the specifications for this project.

The coding of the HTML, CSS, and JavaScript was written and completed by [Eric Sergeant](https://github.com/ericsergeant).
