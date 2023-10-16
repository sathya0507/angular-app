What is an angular component?
Angular component is the building block of angular application.

a component contains data user intercation logic that define how a view looks and behaves.

view in angular reffers to HTML templte.
a component is written in in javascript.

1. template (HTML, CSS)
2. META data (@component)
3. Class created with typescript contains properties and methods.

what is data binding?
Angular components are useless if they dont show any dynamic data, they also need to respond to user interactions and react to events.
Data binding keeps both the components and view in sync with eachother.

diffrent types of data binding:

1. one way binding

\*\*from component to view
We make use of interpolation and property binding.

interpolation:
allows us to include expression as part pof any string literal wich we use in our HTML.
{{template expression}}

\*property binding:
allows us to use element property to a property in thee component.
when ever the value of the component changes the angular updates the element property in the view.

\*class binding:
a. class name property binding
b. set the class atribute with class binding
c. ngClass derective

\*style binding:
a. style binding
b. ngStyle derective

\*\*from view to component

how to change the prefix name of the component
--prefix <prefix-name>

create component
ng g c <component-name>

for skiping test
--skip-tests

for view before run
--dry-run
