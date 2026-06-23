Web-Frontends
Creating modern Web-Frontends using HTML, CSS, JavaScript and Angular
Alexander Stuckenholz
Version 2026-03-30
i

---



---

Contents
Preface 1
0.1 Lecturer and Communication . . . . . . . . . . . . . . . . . . . . . . . . . 1
0.2 Learning Objectives . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
0.3 Resources . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
0.4 Exam . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
1 Internet and the Web 7
1.1 Internet Basics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
1.2 World Wide Web . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
1.3 Web-Server and Web-Browser . . . . . . . . . . . . . . . . . . . . . . . . . 9
1.4 Hypertext Transfer Protocol . . . . . . . . . . . . . . . . . . . . . . . . . . 10
1.5 HTML, CSS and related standards . . . . . . . . . . . . . . . . . . . . . . 11
1.6 Exercises and Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12
2 Hyptext Markup Language 15
2.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15
2.2 Basic Structure . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17
2.3 Text markup and hyperlinks . . . . . . . . . . . . . . . . . . . . . . . . . . 19
2.4 Hyperlinks . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20
2.5 Lists and tables . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21
2.6 Images . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22
2.7 Forms . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23
2.8 Summary and Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . 27
3 Cascading Style Sheets 29
3.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29
3.2 Selectors and Combinators . . . . . . . . . . . . . . . . . . . . . . . . . . . 31
3.3 Lengths and Colors . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32
3.4 Backgrounds and Text effects . . . . . . . . . . . . . . . . . . . . . . . . . 34
3.5 Box Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38
3.6 Visibility and Display . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 41
3.7 Flexbox and Grid . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42
3.8 Bootstrap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 44
3.9 Tailwind . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48
3.10 Summary and Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . 50
iii

---

Contents
4 JavaScript and Node.js 53
4.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 53
4.2 Fundamentals of JavaScript . . . . . . . . . . . . . . . . . . . . . . . . . . 55
4.3 Functions and Callbacks . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60
4.4 Objects and Classes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61
4.5 Promises and Async/Await . . . . . . . . . . . . . . . . . . . . . . . . . . 63
4.6 RxJS . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 66
4.7 Node.js and NPM . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68
4.8 Summary and Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . 71
5 JavaScript in the Browser 73
5.1 JavaScript in the Browser and the Document Object Model . . . . . . . .73
5.2 Document, Elements and Events . . . . . . . . . . . . . . . . . . . . . . . 77
5.3 Native DOM API . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 82
5.4 Canvas . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 83
5.5 Geolocation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85
5.6 Consuming RESTful services . . . . . . . . . . . . . . . . . . . . . . . . . 87
5.7 Summary and Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . 89
6 Single Page Applications and Angular 91
6.1 TypeScript . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91
6.2 Single Page Applications and Angular . . . . . . . . . . . . . . . . . . . . 93
6.3 Angular CLI . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 97
6.4 Folder Structure and Boot Process . . . . . . . . . . . . . . . . . . . . . . 98
6.5 Components . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 100
6.6 Angular and Bootstrap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 104
6.7 Summary and Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . 104
7 Binding and Pipes 107
7.1 Property Binding . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 107
7.2 Signals . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 110
7.3 Event Binding . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 113
7.4 Two Way Data Binding . . . . . . . . . . . . . . . . . . . . . . . . . . . . 114
7.5 Component Interaction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 115
7.6 Pipes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 120
7.7 Summary and Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . 122
8 Directives and Services 125
8.1 Component Lifecycle . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 125
8.2 EduWeb Example Application . . . . . . . . . . . . . . . . . . . . . . . . .126
8.3 Data Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 129
8.4 Directives . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 131
8.5 Services . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 135
8.6 Dependency Injection . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 138
iv

---

Contents
8.7 Logging . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 140
8.8 Summary and Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . 142
9 Routing 145
9.1 Seminars and Routing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 145
9.2 Routing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 146
9.3 Router Outlet . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 148
9.4 Redirects and routerLink . . . . . . . . . . . . . . . . . . . . . . . . . . . 149
9.5 Navigation Bar . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 150
9.6 Summary and Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . 157
10 Authentication and Authorization 159
10.1 Authentication and Authorization . . . . . . . . . . . . . . . . . . . . . . .159
10.2 Route Guards . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .159
10.3 AuthService . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 160
10.4 Template Variables . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .164
10.5 ViewChild . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 167
10.6 Summary and Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . 169
11 Reactive Forms 171
11.1 Reactive Forms . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .171
11.2 Validators . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 178
11.3 Custom Form Controls . . . . . . . . . . . . . . . . . . . . . . . . . . . . .183
11.4 Custom Validators . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 187
11.5 Summary and Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . 189
12 Google Firebase 191
12.1 Firebase . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 191
12.2 Build and Deploy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .193
12.3 Cloud Firestore . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .194
12.4 Authentication . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 200
12.5 Summary and Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . 203
Bibliography 205
v

---



---

Preface
Welcome
W elcome to this course about W eb-F rontends!
• In this course you will learn how to create modern Web-Applications using HTML,
CSS, JavaScript and Angular.
In this course we will particularly focus on the frontend-side of Web-Applications.
• So, we will work a lot with technologies being somehowclose to web browsers.
But before we can start our common journey we need to address some organizational
matters.
• We need to talk about thelearning objectives of this course,
• where to getadditional information ,
• what is all about thelanguage of this course,
• where to find theexample project and thelearning videos,
• and especially how theexam looks like.
0.1 Lecturer and Communication
Lecturer
My name is Alexander Stuckenholz.
• I’m the lecturer of this course.
Since 2012 I’m a professor forPractical Computer Science at the Hamm-Lippstadt
University of Applied Sciences.
• Before I was a professor I worked in the industry, mainly in the energy sector.
• I worked in different roles, as a programmer, as a software architect, project man-
ager and team lead.
1

---

Contents
Figure 0.1: Yes, that’s me.
You can find some details about my work here.
• You can also find me on Xing or LinkedIn.
Communication
If you have any questions around the course please do not hesitate to contact me.
The best way to get in contact is probably email:alexander.stuckenholz@hshl.de
• But, we can also have a 1:1 using e.g. WebEx or Skype.
• My contact-name on Skype is:alexander.stuckenholz
Slack is another great tool to communicate.
• I have an environment prepared that you can use.
• Here, we can chat with each other or share some content.
• Please let me know if you want to use Slack in this course.
2

---

0.2 Learning Objectives
0.2 Learning Objectives
Learning Objectives
A successful participant of the course will reach the following objectives:
• Understanding the basics of the web and its distributed nature.
• Being able to build web pages using HTML5 and CSS3.
• Knowing the basics about the JavaScript programming language.
• Being able to dynamically manipulate the DOM of a web page using JavaScript.
• Knowing, how to use Angular to create Single Page Applications.
• Being able to create components and services and use property and event binding.
• Being able to implement routing, authentication and authorization.
• Knowing how to work with web-forms in Angular.
• Being able to integrate Firebase with Angular.
0.3 Resources
Course Materials
You can use multiple different course materials, e.g.:
• a textbook in which each lecture is covered in one chapter.
• multiple learning videos each covering a single lecture.
• an example project:https://github.com/LosWochos76/web-frontends.
All of the materials can be found in the learning platform atmy.hshl.de.
• If you do not have access you are not enrolled in this course.
Please keep in mind: All of the materials arefor your personal use only .
• The circulation of materials to others is not permitted.
3

---

Contents
Online Resources
There are a lot of great resources about the topics of this course.
• Of course, you will find good articles on the web, e.g.:
• https://www.w3schools.com/HTML/
• https://www.w3schools.com/css/
• https://www.w3schools.com/js/
• https://www.w3schools.com/bootstrap4/
As we will use some frameworks, their online-documentation are also good resources:
• https://getbootstrap.com/
• https://nodejs.org/en/
• https://jquery.com/
• https://angular.io/docs
Books
Of course, you can also read great books about HTML, CSS, JavaScript etc.
• You will find lots of them for free in our library, e.g.: [2], [5], [4].
But, it is a good sign that there is something wrong with my materials if you cannot
understand any topic from this course without using external resources.
• In this case I would like to ask you to get in contact with me.
• Please give me the chance to fix the issue.
4

---

0.4 Exam
Language
As you may have recognized:
• This lecture will be held in English.
• The course materials will be in English, too.
This doesn’t mean that you have to speak English with me all the time.
• You may ask questions in German, too.
If you have problems following me:
• Please interrupt me!
• I will repeat the things being said in other words.
0.4 Exam
Exam
The course assignment is to develop a (little) web-application.
• Each participant must submit their project source code at the end of the semester.
I need a registration by e-email until the first half of the semester is over!
• Please e-mail me with a description of what you want to implement.
The main aim of your project is to prove your capabilities.
• So, you should use as many of the technologies from this course as possible.
• You will not pass the exam with only a few static HTML-pages!
We will have a verbal exam at the end of the semester.
• You need to present the project to me.
• The exam can be held in German or English.
5

---

Contents
Important Dates
Currently, lecture and exercises are schedules on Mondays.
• If no students from ETR are here, I would like to change that.
• Then, we would move lecture and exercises to Wednesday afternoon, e.g. 1pm.
• Ok?
In KW20 I will be away from Tuesday to Friday (12-15 May).
• In this week we will have the lecture and exercise on Monday, 11th May!
• Please write that down!
6

---

1 Internet and the Web
1.1 Internet Basics
Internet Basics
The internet is a global system of interconnected computer networks.
• Several billion devices worldwide (Servers, PCs, mobile phones, …)
• It’s a highly distributed system.
Most important : All participants use a standards stack of protocols (on the OSI-
layers).
• Without standardization communication can not be successful.
• For the internet this typically means using IP on the network layer (3) and trans-
port protocols like TCP or UDP on the transport layer (4).
Packets and Routing
On the internet all data is transmitted as independentdata packets .
• Every packet may take another route through the network.
• The header of the packet contains the source and the destination address of each
packet.
• Hence, every participant needs a unique address: IP-address.
Coupling elements like routers and switches are part of the infrastructure.
• They inspect the header of a packet to forward it to its destination (based on
routing tables).
• Transmission speed is not guaranteed: best effort.
7

---

1 Internet and the Web
Connectivity and robustness
The internet looks like a spiderweb of computer nodes.
• Mostly, two single nodes can connect via different alternative routes.
The more alternative routes the better.
• Even when some routes are disturbed, communication can be established.
In reality paths may be interrupted or suffer on high traffic.
• Routing protocols dynamically adapt to failures and congestion.
• The communication becomes robust.
• Disturbances will be compensated automatically.
Internet Applications
On top of all the communication infrastructure, applications may provide their services
to the end-users.
• e.g. E-mail, file transfer, World Wide Web, …
Internet applications are often based on the client/server model.
• A dedicated computer (server) provides a certain service to the clients.
• Software applications on the server expect being requested in order to respond
with an according message.
• Additionally, modern applications frequently use APIs and distributed services.
Each of the applications implements an own protocol for the requests and the response.
• E-Mail: SMTP, POP3, IMAP
• World Wide Web: HTTP, HTTPS
8

---

1.2 World Wide Web
1.2 World Wide Web
World Wide Web
The W orld Wide W eb (WWW)is one of the most popular services of the internet.
• Originally proposed by Tim Berners-Lee in the late 1980s.
• We will strongly focus on the WWW during the next weeks.
The WWW is a system of electronic hypertext documents.
• These documents can be accessed via the internet.
• The documents may be interlinked, which creates the meshed (web) structure of
the system.
To request a document from a web-server, a special client software (a web browser) is
needed.
• Browser and Server communicate throughout a specific protocol: Hypertext Trans-
fer Protocol (HTTP).
1.3 Web-Server and Web-Browser
Web-Browser and -server
The web browser is an application on the client device.
• e.g. Safari, Firefox, Google Chrome, Microsoft Edge.
The browser has two main tasks:
• Requesting a web-document from a remote server by forming a correct HTTP-
request.
• Presenting the results to the user by generating a graphical representation of the
retrieved document.
The counterpart of the web browser is theweb-server.
• A web-server is a software package installed on a remote server, e.g. Apache
HTTP-Server, Apache Tomcat, Jetty, …
• A web-server typically listens on ports 80 (HTTP) and 443 (HTTPS).
9

---

1 Internet and the Web
Figure 1.1: Traditional page lifecycle. Image source: [3]
Traditional request cycle
Intraditionalwebapplications, thebrowserinitiatesthecommunicationwiththeserver.
• All subsequent actions (clicking a hyperlink, submitting a form) lead to new re-
quests to the server.
• HTTP is stateless: Each request is independent.
• Without additional tricks (sessions, cookies) the server has no history about pre-
vious requests.
1.4 Hypertext Transfer Protocol
Hypertext Transfer Protocol
Thehypertext transfer protocol (HTTP) defines the language to communicate with
a web-server.
• HTTP defines just a small set of commands (requests): GET, PUT, POST,
DELETE, HEAD.
One can drop such a request to a server by using telnet on the command line:
10

---

1.5 HTML, CSS and related standards
Figure 1.2: Using telnet to send an HTTP request to a web-server.
Uniform Resource Locator
Each document on the WWW has a unique address, theUniform Resource Locator
(URL).
• The URL is used to retrieve documents from a remote server and to create hyper-
links between them.
• The URL may consist of multiple parts, at least the domain name of the web-server
and the path of the document on the server.
A full example of a URL:
• http://hans:secret@example.org:80/demo/example.cgi?country=de&city=
aa#history
A URL may also contain parameters in form of key/value pairs, e.g.country=de.
• Those parameters can get evaluated by some programming logic on the server.
1.5 HTML, CSS and related standards
HTML, CSS etc.
11

---

1 Internet and the Web
Web-documents are usually built withHyperT ext Markup Language (HTML) .
• HTML uses tags to statically structure the information in a web-document and
give them a meaning, e.g. articles, sections, paragraphs, ...
Cascading Stylesheets (CSS) is another language to describe the styling and layout
of a web page.
• With HTML and CSS content and presentation is separated.
HTML documents may also embed program scripts written inJavaScript.
• JavaScript enables dynamic behavior and interaction within the browser.
This course is all about using all these technologies to create web-applications.
Application development for the web
We are software developers.
• Our main target is to develop applications for the web, e.g. online shops, social
networks, ...
• Hence, we need to make use of all the technologies: Web-Server, web browser,
HTML, CSS, JavaScript, ...
As the web is a highly distributed system, we need to decidewhere to dowhat.
• We have multiple options, e.g. running scripts inside the browser or on the server.
We also need to decide on the programming languages and frameworks to use.
• Thereisamillionofframeworksforweb-development, e.g. Angular, React, ASP.Net
Core, J2EE, …
1.6 Exercises and Summary
Exercises
• What does it mean, that HTTP is a stateless protocol?
• What consequences does this statement have?
• Use your web browser and go the URL https://www.hshl.de.
• Find out, how you can have a look at the HTML-source of that web page.
12

---

1.6 Exercises and Summary
• Which elements do you see?
• Can you find CSS or JavaScript?
Summary
We learned today...
• the basic principles of the internet, infrastructure and protocols.
• our most important application environment: The World Wide Web
• what role Web-Servers and Web-Browsers play.
• the meaning of the Hypertext Transfer Protocol.
• what the HyperText Markup Language is.
• which expertise is necessary for the development of web-applications and which
questions arise.
13

---



---

2 Hyptext Markup Language
2.1 Introduction
Introduction
Web-pages are built withHTML.
• HTML documents are retrieved from web servers over the internet.
• HTML is rendered by the browser into a visual representation.
HTML is used to give information a structure in regard to its content.
• The layout is defined by another standard: Cascading Stylesheets (CSS).
• We will have a look at CSS in the next lecture.
In order to build web pages, you need to learn...
• the structure of an HTML document.
• what HTML-tags exist and how you can use them.
Documents
HTML documents are based on plain text.
• Hence, you do not need specific tools to create them.
• You can use any text editor you like, e.g. Visual Studio Code.
Alternatively, you can use online editors that run directly in the browser.
• Tools like StackBlitz or CodeSandbox run HTML in the browser.
• This is especially useful for quick experiments, sharing code, or teaching purposes.
HTML documents contain a series of HTML elements, so-calledtags.
• Tags describe the structure and meaning of content.
15

---

2 Hyptext Markup Language
• They are the building blocks of a web page.
• They label parts with a certain meaning, e.g. a heading or bold-text.
Tags
Tags are enclosed in angle brackets, e.g.<html>, <b>.
• Most (not all) tags need to be closed, e.g.<p>This is a paragraph</p>.
• Some tags are self-closing (void elements), e.g.<br>, <img>, <input>.
Spelling of tags (or attributes) is not case-sensitive.
• But usually tags are written in lower-case letters.
Tags may encapsulate plain text and/or other tags.
• HTML implies a structure of nested tags, e.g.<body><p>Paragraph</p></body>.
In contrast to XML, HTML defines the allowed set of tags and their semantics.
• Tags and its attributes are defined by the HTML-standard, which is maintained
by the World Wide Web Consortium (W3C).
Attributes
Start-tags may haveattributes.
• They define additional information by name/value pairs, e.g.width="400".
• It depends on the tag which attributes are allowed.
• Some attributes can be defined on all tags, e.g.id and class.
The id attribute is used to give a tag a unique name in the HTML document.
• You can use this name to reference that element, e.g. to apply a CSS style or to
access it with JavaScript.
The class attribute is used to assign CSS classes to an element.
• CSS class names can be chosen freely.
• One can attach multiple CSS classes to an element, e.g.class="important headline".
16

---

2.2 Basic Structure
2.2 Basic Structure
Basic structure
The basic structure of a HTML5-document looks like that:
1 <!DOCTYPE html>
2 <html lang="en">
3 <head>
4 <meta charset="UTF-8">
5 <meta name="viewport" content="width=device-width, initial-scale=1.0">
6 <title>Page Title</title>
7 </head>
8 <body>
9 <h1>Hello World</h1>
10 </body>
11 </html>
Explanation
The <!DOCTYPE html> declaration defines that this document is based on HTML5.
The <html> element is the root of the HTML-page.
• Each HTML-page can only have one of it.
The <head> element contains meta-information about the page.
• Here, we can specify metadata such as the page title and character encoding.
• External CSS files are usually linked here; scripts may also be loaded here.
The <body> element is the container of the visible content of the document.
• Here, we add headings, paragraphs, images, hyperlinks etc.
Metadata
The title of the web page will be displayed in the title bar of the browser:
<title>Webshop</title>
The character-set defines the type of characters to be used:
<meta charset="UTF-8">
Description, keywords and settings for indexing thatmay be used by search-engines:
17

---

2 Hyptext Markup Language
1 <meta name="description" content="Webshop for horse and hound">
2 <meta name="robots" content="noindex,nofollow">
One can also embed CSS or JavaScript directly into the HTML document:
1 <style> body { background: red; }</style>
2 <script> alert("Hello"); </script>
In larger applications, CSS and JavaScript are usually placed in separate files.
Heading and paragraph
Most web pages contain multiple headings and paragraphs:
<h1>Important headline</h1>
• Encapsulates a heading on a certain level (1-6).
• Here, <h1> is the heading on the highest level.
<p>This is a paragraph</p>
• A paragraph is a part of a longer text.
• Sections may be split into paragraphs.
Semantic parts
HTML has several elements to define differentsemantic parts of web pages.
• e.g. <header>, <footer>, <article> or <section>.
• Those elements do not create a layout but give certain parts a specific meaning.
<main>Main content</main>
• The main-tag encapsulates the main-part of a web page.
<article>This is an article</article>
• An article represents a self-contained piece of content, for example a blog post or
news article.
• An article often contains an own header and multiple sections.
18

---

2.3 Text markup and hyperlinks
Section, Header and footer
<section>This is a section.</section>
• The section-tag is used to thematically group information. Usually, articles contain
multiple sections.
<header>Welcome</header>
• A header represents introductory content for a page or a section.
• Here you can place a company-logo etc.
<footer>Contact</footer>
• A footer contains closing or meta information about a page or section.
Example
1 <header>
2 <h1>Welcome to our Web-Page</h1>
3 </header>
4 <article>
5 <section>
6 <h2>Section 1</h2>
7 <p>Some content</p>
8 </section>
9 <section>
10 <h2>Section 2</h2>
11 <p>Some more content</p>
12 </section>
13 </article>
2.3 Text markup and hyperlinks
Text markup
Next to elements, that organize the structure of a whole web page, a multitude of tags
apply some formatting to text.
• <strong>Important text</strong> (semantic importance)
• <em>Emphasized text</em> (semantic emphasis)
• <b>Bold text</b> (visual only)
• <i>Italic text</i> (visual / alternative voice)
19

---

2 Hyptext Markup Language
• <small>Small print</small> (side comments, legal text)
• <del>Deleted text</del> (removed content)
• <strong> and <em> add semantic meaning, while<b> and <i> are mainly visual.
2.4 Hyperlinks
Hyperlinks
One of the most important capabilities of HTML is to refer to other web-documents by
creating hyperlinks.
• Such a hyperlink is a directed reference to another web page.
• The referred documents can be hosted on the same web-server or belong to a
completely different web-site.
• The referred web page does not know which other pages link to it.
• Search engines use hyperlinks as a metric for popularity.
For typical web links, the browser sends an HTTP GET request.
• The arbitrary possibility to set links between web pages creates a spiderweb of web
pages.
• This gives the World Wide Web its name.
Creating hyperlinks
Hyperlinks are created by using the<a>-tag.
• The <a>-tag needs at least one additional attribute, the URL of the web-document.
• That URL is defined by thehref attribute.
1 <a href="https://www.tagesschau.de/">ARD Tagesschau</a>
2 <a target= "_blank" href="http://www.heise.de/newsticker/">Heise Newsticker</a>
3 <a href="mailto:alexander.stuckenholz@hshl.de">Alexander Stuckenholz</a>
4 <a href="tel:+499123456789">09123 456789</a>
Clicking such a link will cause the browser to create a new GET-request to load the
document.
• By default, the results will be presented to the user in the current browser window.
• Once can change this behavior by adding thetarget attribute.
20

---

2.5 Lists and tables
• <a href="https://www.hshl.de" target="_blank" rel="noopener">HSHL Homepage</a>
2.5 Lists and tables
Lists
HTML allows grouping elements in ordered or unordered lists.
• The container element for unordered lists is<ul>, ordered lists are created with
<ol>.
• Each element in either of such lists is encapsulated with the<li> element, e.g.
<li>A list element</li>.
• Lists can also be nested to create multiple levels of elements.
1 <p>Shopping list:</p>
2 <ul>
3 <li>Milk</li>
4 <li>Butter</li>
5 <li>Cheese</li>
6 </ul>
Tables
Tables provide means to present information in columns and rows.
• The <table> tag defines a table.
• Each row is defined by a<tr> tag, each regular cell is defined by the<td> tag.
• A cell containing column headers is defined by the<th> tag.
• The cell-content inside<th> tags are displayed centered and bold by default.
1 <table>
2 <tr>
3 <th>Tag</th><th>Meaning</th>
4 </tr>
5 <tr>
6 <td>a</td><td>Hyperlink</td>
7 </tr>
8 </table>
Do not use tables to create a page-layout! This is not responsive!
21

---

2 Hyptext Markup Language
2.6 Images
Images
Of course, a web page does not only contain plain text.
• At least images are an essential part of web pages.
Images are embedded using the<img> tag.
• You need to add at least thesrc-attribute to specify the URL of the image.
• The alt attribute provides a text alternative for accessibility and for cases where
the image cannot be displayed.
• <img src="file.png" alt="This is an alternate description">
By default, the image is presented in the original size.
• You can add additional attributes width and height to control the size in the
browser.
• <img src="file.png" width="200" height="400">
• In modern web development, image size is often controlled via CSS.
Block and inline
Depending on the specific element, each tag has a default display behavior.
• An element is either ablock- or aninline-element.
• An inline element is only as wide as necessary and does not start a new line.
• A block element creates a new line and consumes as much width as possible.
Basically all elements for applying text format are inline elements:
• <b>, <i>, <a>, ...
Elements to define semantic parts of a web page are block elements, usually:
• <article>, <section>, <table>, <ul>, <ol>, ...
22

---

2.7 Forms
div and span
Two HTML-tags are generic container elements often used with CSS or JavaScript.
• Both <div> and <span> can be used to apply CSS-styles.
The only difference is their display behavior.
• The <div> tag is a block element, whereas<span> is an inline element.
1 <div style="background-color: green">
2 <h1>Heading</h1>
3 <p>This is a perfectly good grouping.</p>
4 </div>
5
6 <span style="background-color: red">This is an inline element</span>
2.7 Forms
Forms
For many use-cases we need to collect user input, e.g. login credentials.
• HTML provides a range of elements like text-boxes, buttons, checkboxes etc. to
create web-forms.
• Classically, the user input from such forms is supposed to be transmitted to a
web-server by means of an HTTP-request.
• In modern applications, JavaScript often sends form data to APIs.
All HTML elements of such a web-form must be placed inside a<form> container.
• Withthe action attribute, wespecifythetargetURLforthedata, e.g. action="/target.php".
Another important attribute ismethod.
• Themethoddefinesthewayhowtosendtheformdatatotheserver, e.g. method="POST".
• POST is commonly used when data modifies server state or should not appear in
the URL.
23

---

2 Hyptext Markup Language
Input elements
Most (not all) of the different user controls are realized by the<input> tag.
• Depending on the value of the attributetype the element will turn out to be a
text-box, a checkbox, a submit-button, an input field for passwords or numbers, …
• Currently, HTML provides many input types.
Some examples:
• A simple text-box:<input type="text">
• A radio-button: <input type="radio">
• A checkbox:<input type="checkbox">
• A button to submit the data:<input type="submit">
Input attributes
Each of such input fields can (and should) be further specified by attributes.
• With attributeid one can give the element a unique name, e.g.id="name".
• Such aid is useful to reference an input field, e.g. defining a label for it.
Another important attribute isname.
• As the data is sent to the server by means of key/value pairs the name will be the
key to access the value on the server, e.g.name="firstname".
Depending on the type of the input field multiple other attributes may be used.
• The attributevalue can hold an initial value of the input element, e.g.value="Alex".
• The size defines the visible width of an input field, e.g.size="10".
• The maxlength specifies the maximum number of characters allowed in an input
field, e.g. maxlength="40".
24

---

2.7 Forms
Other form elements
A label defines a visible description for form elements, which is also useful for screen-
readers.
• The for attribute of thelabel tag should be equal to theid attribute of the ac-
cording input element.
1 <label for="firstname">Firstname:</label>
2 <input type="text" name="firstname" id="firstname" maxlength="80">
The select element defines a control to select one (drop-down) or more elements from a
list.
• Each element is defined by theoption tag.
1 <label for="topping">Choose a topping:</label>
2 <select id="topping" name="topping" size="3">
3 <option value="cheese">Cheese</option>
4 <option value="salami">Salami</option>
5 <option value="onion">Onions</option>
6 </select>
Example
1 <form method="post" action="/submit">
2 <p>
3 <input type="radio" name="anrede" value="mr" id="mr">
4 <label for="mr">Mr.</label>
5 <input id="mrs" type="radio" name="anrede" value="mrs">
6 <label for="mrs">Mrs.</label>
7 </p>
8 <p>
9 <label for="firstname">Firstname:</label>
10 <input name="firstname" id="firstname" type="text">
11 </p>
12 <p>
13 <label for="lastname">Lastname:</label>
14 <input name="lastname" id="lastname" type="text">
15 </p>
16 <p>
17 <label>Country:</label>
18 <select name="country" size="1">
19 <option>Germany</option>
20 <option>Turkey</option>
21 </select>
22 </p>
23 <button type="submit">Send to server</ button>
24 </form>
25

---

2 Hyptext Markup Language
Figure 2.1: A form rendered in the browser.
26

---

2.8 Summary and Exercises
2.8 Summary and Exercises
Summary
We learned today...
• some basics about HTML and the history of this standard.
• some hints about the development of HTML documents.
• the basic structure of a web page
• what meta-data can be defined and how to give the content of web pages a struc-
ture.
• what HTML elements exist in order to structure text.
• how to give text a markup and the concepts of hyperlinks.
• how tables can be created within HTML.
• how images can be embedded into web pages.
• how web-forms are created.
Exercises
• Recapitulate the HTML elements from this lecture.
• How can metadata be defined in for a web page?
• How is text defined as italic or underlined?
• Why is it good to give the information in a web page a structure by using elements
like <article> or <section>?
• Why shouldn’t you use tables to define the layout of a web page?
• Create a personal web page about yourself.
• No worries. You don’t need to publish it.
• Use as many elements from this lecture as possible, e.g. add a picture, add a CV
in a table, create a contact-form, ...
27

---



---

3 Cascading Style Sheets
3.1 Introduction
Introduction
HTML without Cascading Style Sheets (CSS) is structurally correct, but visually
limited.
• The objective of HTML is to describe the structure of the information but not the
visual appearance.
CSS is used to control how HTML is presented on screen, paper, or other media.
• CSS separates the definition of design and layout from the actual content (HTML).
• CSS rules affect the presentation of HTML elements, for example their color, size,
position, and spacing.
CSS provides extensive possibilities to influence the design and layout of HTML pages.
• We will focus on the core CSS features needed for building web applications.
• Things like animations, transitions, transformations etc. will not be part of this
course.
Syntax
A CSS rule-set consists of aselector and adeclaration block:
1 selector1 [, selector2, ...] {
2 property-1: value-1;
3 ...
4 property-n: value-n;
5 }
6
7 /* This is a comment */
A selector specifies which HTML elements a style rule applies to.
29

---

3 Cascading Style Sheets
• Selectors can target elements by type, class, id, attributes, or relationships to other
elements.
The declaration block contains one or more declarations separated by semicolons.
• Each declaration includes a CSS property name and a value, separated by a colon.
Examples of CSS
1 body {
2 background-color: gray;
3 font-family: Arial, Helvetica, sans-serif;
4 }
5
6 h1 {
7 padding: 5px;
8 background-color: lightgreen;
9 border: 5px dotted green;
10 font-weight: bold;
11 }
12
13 .important {
14 padding: 5px;
15 background-color: white;
16 border: 5px solid red;
17 }
Embedding CSS
There are three common ways to apply CSS to HTML.
• Usually, CSS rules are stored in a separate file.
• This allows multiple HTML documents to share the same stylesheet.
1 <head>
2 <link rel="stylesheet" href="mystyle.css">
3 </head>
Internal CSS is placed in the<head> part of the HTML document inside a<style> ele-
ment.
1 <style>
2 h1 { color: red; }
3 </style>
Inline CSS may be used to apply a unique style for a single HTML element.
30

---

3.2 Selectors and Combinators
1 <h1 style="color: red;">This text is red</h1>
3.2 Selectors and Combinators
Selectors
Selectors define which HTML elements are matched by a CSS rule.
• There are multiple selector types for targeting groups of elements or individual
elements.
Theelement-selector selectstheelementsbasedontheelementname, e.g. p { color: red; }.
• Here, the content of all<p> tags in the document will have red text.
The id-selector applies a rule to the single HTML tag with the given ID.
• Thestatement #element { color: green; } onlyaffectstheelementwith id="element",
regardless of its type.
The class-selector selects all HTML tags that have a certain CSS-class assigned.
• The statement.important { color: red; } applies to all tags withclass="important".
Combinators
Selectors can be combined in multiple ways to find very specific combinations of tags in
an HTML document.
• Theuniversal selector applies the rule set to all elements in an HTML document,
e.g. * { text-align: center; }.
• Thegrouping selector appliesarule-settoallelementsinalist, e.g. h1, p { color: green; }.
• The descendant selector matches all elements that are children (or children of
children) of a specific element, e.g.h1 p { color: green; }.
• Thechild selector matchesthedirectchildrenofanelement, e.g. h1 > p { color: green; }.
• The general sibling selector matches all sibling elements that follow a given
element, e.g.div ~ p { background-color: blue; }.
• Theadjacent sibling selector matchesthenextsibling elementthatimmediately
follows a given element, e.g.h1 + p { color: green; }.
31

---

3 Cascading Style Sheets
Pseudo-classes
A pseudo-class styles elements in a specific state, e.g. hovered or focused.
• There are more than 30 such pseudo-classes indicating a variety of different states.
• You can style an element if it is currently hovered, focused, or the first child of
another element.
The :hover pseudo-class styles an element hovered by the mouse.
• Mostly this is used on hyperlinks, but it works with other elements as well, e.g.
div:hover { background-color: blue; }.
The :required pseudo-class applies a rule-set to <input> elements that are marked as
required.
• Hence, youcanchangetheirvisualappearanceaccordingly, e.g. #firstname:required { border: 1px solid red; }.
3.3 Lengths and Colors
Lengths
Many properties need a length value, such aswidth, height or font-size.
• CSS has several units to express such relative or absolute lengths.
Common units:
px Pixels, e.g. ...
em Relative to the current font size
rem Relative to the root font size
Absolute units:
cm Centimeters, e.g.<p style="border-bottom:1cm solid blue;">.
mm Millimeters, e.g. 5 mm.
in Inch, e.g. 3in.
For web layouts, relative units and pixels are more common than cm or in.
32

---

3.3 Lengths and Colors
Figure 3.1: Colors in CSS can be specified in multiple different ways.
Colors
In CSS colors can be specified in multiple different ways.
CSS has some 140 predefined color names, e.g. red, blue, orange, lightgray, ...
• <p style="color: tomato;">
One can also use RGB values:
• <h1 style="background-color: rgb(72,72,72);">
Or you specify colors as HEX-values:
• <div style="background-color: ##ff6347;">
33

---

3 Cascading Style Sheets
3.4 Backgrounds and Text effects
Backgrounds in CSS
Background properties define how an element’s background is displayed.
• Therearemultiplesuchproperties, e.g. background-color,background-image,background-repeat,
background-size, background-attachment and background-position.
• Themostsimplepropertyis background-color, e.g.<p style="background-color: lightgray;">.
The other properties are mainly about using images as background:
1 header {
2 background-image: url("pic.png");
3 background-repeat: repeat-x;
4 background-position: left top;
5 }
Text effects
Text presentation can be controlled with several CSS properties.
• e.g. color, alignment, shadow, text-decoration, ...
Some examples:
1 <p style="text-align: center;">
2 This paragraph is centered</p>
3 <p style="text-shadow: 2px 2px red;">
4 This paragraph has some shadow</p>
5 <p style="font-weight: bold;">
6 This paragraph is bold</p>
7 <p style="text-decoration: underline;">
8 This paragraph is underlined</p>
Fonts
Because not all users have the same fonts installed, CSS font stacks usually end with a
generic font family such as serif, sans-serif, or monospace.
• Serif fonts have small strokes at the end of each letter creating some sense of
formality and elegance.
• Sans-serif fonts have clean lines creating a modern and minimalistic look.
34

---

3.4 Backgrounds and Text effects
Figure 3.2: Using an image as background.
35

---

3 Cascading Style Sheets
Figure 3.3: Text effects in CSS.
36

---

3.4 Backgrounds and Text effects
Figure 3.4: Using different font-families in CSS.
• With monospace fonts all characters have the same fixed width (for source code).
You choose such a font stack using thefont-family property:
• <body style="font-family: Arial, Helvetica, sans-serif;">.
Web Fonts and Fallbacks
Fonts are not limited to those installed on the user’s system.
• Web fonts can be loaded from external providers, e.g. Google Fonts.
• This ensures a consistent appearance across different devices.
To use such a font include a link to the font in the<head> section, e.g.:
• <link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet">
Then use it in CSS:
37

---

3 Cascading Style Sheets
1 body {
2 font-family: 'Roboto', Arial, sans-serif;
3 }
Important: Always provide fallback fonts.
• The browser uses the first available font in the list.
• End with a generic family (e.g.sans-serif).
Icons
Icons are often used to improve usability and visual communication.
• HTML does not provide built-in icons.
• Icons are typically added via external libraries
Example: Font Awesome:
• Large collection of ready-to-use icons.
• Easy integration via CDN (no account required).
Include in HTML:
• <link rel="stylesheet" href="https://cdnjs.cloudflare.com/.../font-awesome.min.css">
Usage:
• <i class="fa-solid fa-clock"></i>
3.5 Box Model
Box Model
In CSS, every element is a box made up of content, padding, border, and margin.
• With CSS the dimensions of each of the parts can be defined.
The margin defines the outer distance of an element to its neighbors.
1 margin: 5px;
2 margin-bottom: 3px;
3 margin-left: auto;
38

---

3.5 Box Model
Figure 3.5: The CSS box model. Image source: [9]
The padding defines the inner spacing between the border and the content of an ele-
ment.
1 padding: 5px;
2 padding-left: 10px;
Width, Height and Overflow
width and height set an element’s content size.
• By default, width and height refer to the content area only.
1 div {
2 height: 100px;
3 width: 500px;
4 background-color: green;
5 }
39

---

3 Cascading Style Sheets
Figure 3.6: Rounded borders in CSS.
With the propertyoverflow you can control what happens to content that is too big to
fit into the given area.
• The property can have four different values:visible (default), hidden, scroll and
auto.
• With hidden the content is cut, and the overflow is hidden.
• The valuescroll cuts the content and shows a scrollbar, if necessary.
Borders
With theborder property one can define the thickness, color and layout of edges around
an element.
• This can be done for each edge (border-left, border-right, …) or for all edges at
once.
The border-style defines the line-style of the border.
• You can choose betweensolid, dotted, double and dashed.
• <p style="border: 5px solid red;">This has a red border</p>
40

---

3.6 Visibility and Display
With border-radius you can create round edges as well.
1 <p style="border: 5px solid red; border-radius: 3px;">
2 This paragraph has a rounded red border
3 </p>
3.6 Visibility and Display
Visibility and Display
Hiding an element can be achieved by setting propertyvisibility to hidden.
• <div style="visibility:hidden">This content is hidden</div>
• Usually, this property will be set dynamically by JavaScript functions.
• Keep in mind, that such elements still take up the same space as if there were
visible.
If you want to hide an element completely you can use thedisplay property.
• <div style="display:none">This content is hidden completely</div>
The display property may also take other values, likeinline or block.
• Hence, you can overwrite the default behavior of an element.
Position
As we already know, all HTML elements have surrounding boxes.
• Depending on the order of appearance they are positioned on the web page.
• With theposition property you can influence the positioning method and change
its flow.
With value relative you can shift the position of an element relatively to its original
position.
• The original gap that was left for the element will not be changed.
• <div style="position: relative; left: 30px;">This content is shifted left</div>
An element that is positionedabsolute is taken out of the flow and does not leave a
gap.
41

---

3 Cascading Style Sheets
Figure 3.7: A simple layout created with Flexbox.
• Elements that are behind it fill the gap with the absolute positioned element.
• <div style="position: absolute; top: 30px; left: 30px;">Content at top, left side</div>
3.7 Flexbox and Grid
Floating elements
By using thefloat property, elements are pushed to the side and the surrounding text
flows around them.
• Float is not only suitable for individual elements such as images.
• Historically, it was also used to create multi-column page layouts.
The following example specifies that an image should float to the right of the text:
1 <div style="border: 1px solid red; overflow: auto">
2 <img src="pic.png" style="float: right">
3 This text will be shown on the left side of the image
4 </div>
Add overflow: auto to prevent the image from overflowing the<div>.
Important: Today, float is primarily used to wrap text around images (as in print
layouts).
• For multi-column page layouts, preferFlexbox or CSS Grid instead.
Flexbox
Flexbox is designed for one-dimensional layouts (rows or columns).
• Apply display: flex to the container element.
1 <div style="display: flex; gap: 10px;">
2 <div style="flex: 1; background: yellow;">Column 1</div>
3 <div style="flex: 1; background: orange;">Column 2</div>
4 <div style="flex: 1; background: yellow;">Column 3</div>
5 </div>
The flex property controls how items grow and shrink:
42

---

3.7 Flexbox and Grid
• flex: 1 means all items share the available space equally.
• It is a shorthand forflex-grow, flex-shrink, andflex-basis.
• With flex: 1, items expand to fill the available space equally.
Grid
CSS Grid is designed for two-dimensional layouts (rows and columns).
• Apply display: grid to the container, define columns and rows explicitly.
1 <div style="
2 display: grid; grid-template-columns: 1fr 2fr; grid-template-rows: auto auto; gap: 10px;">
3 <div style="background: yellow;">Item 1</div>
4 <div style="background: orange;">Item 2</div>
5 <div style="background: lightblue;">Item 3</div>
6 <div style="background: lightgreen;">Item 4</div>
7 </div>
Grid divides the container into a layout grid:
• fr distributes available space (e.g.1fr 2fr).
• Items are placed into cells (row by row by default).
• Rows and columns can be controlled independently.
Both Flexbox and CSS Grid are powerful tools for creatingresponsive layouts .
Responsive Web-design
Responsive web-design ensures that a website adapts to different screen sizes.
• Flexbox and CSS Grid enable flexible layouts.
• Content, layout, and font sizes adjust dynamically.
Media queries allow applying CSS depending on the screen size:
• Define breakpoints, e.g. for mobile, tablet, desktop.
1 @media (max-width: 600px) { /* For screens smaller than 600px */
2 body { font-size: 14px; }
3 }
Typical use cases:
43

---

3 Cascading Style Sheets
• Change layout (e.g. columns → stacked)
• Adjust font sizes and spacing
• Hide or show elements
3.8 Bootstrap
Bootstrap
Instead of creating CSS for high-quality and responsive web-design completely from
scratch we can use multiple existing CSS-frameworks.
• One of the most used CSS frameworks isBootstrap.
Bootstrap is an open source toolkit providing design templates for a variety of use-cases
like typography, navigation bars, buttons, alert-boxes, a grid system, forms etc.
• Using Bootstrap means to use certain HTML structures and applying predefined
CSS-classes to HTML elements.
• In a basic version it comes as a single CSS-file loaded via a CDN or local installa-
tion.
• The documentation also provides a starter template that should be used.
Bootstrap also provides dynamic components such as modals, tooltips, or carousels.
• To enable those features you also need to load one or more JavaScript libraries.
Grids with Bootstrap
The Bootstrap grid-system provides a convenient abstraction for building responsive
layouts.
• It is awrapper around CSS Flexbox (and modern layout techniques).
• Instead of writing CSS, you use predefined classes.
• The basic building blocks arecontainers, rows and columns.
The following example divides the content into 3 equal columns:
44

---

3.8 Bootstrap
1 <div class="container">
2 <div class="row">
3 <div class="col" style="background-color:yellow;">1 of 3</div>
4 <div class="col" style="background-color:orange;">2 of 3</div>
5 <div class="col" style="background-color:yellow;">3 of 3</div>
6 </div>
7 </div>
Note: Similar layouts can be implemented directly using Flexbox or CSS Grid.
Breakpoints
In the previous example we used the classcol for equal-width columns.
• These columns stay side-by-side, even on small screens.
Breakpoints define when the layout adapts to different screen sizes.
• They are based onscreen width , not specific devices, e.g.:
• Small ≥576px (col-sm), Medium≥768px (col-md), Large≥992px (col-lg)
Example: columns only side-by-side on large screens:
1 <div class="container">
2 <div class="row">
3 <div class="col-lg" style="background-color:yellow;">1 of 2</div>
4 <div class="col-lg" style="background-color:orange;">2 of 2</div>
5 </div>
6 </div>
Concept: Bootstrap breakpoints correspond to CSS media queries.
Bootstrap Components
Bootstrap comes with a variety of useful components like Navigation Bars, Alerts, But-
tons, …
• These elements look professional and are easy to use.
The following example shows how to create an alert that can be used to present some
additional information e.g. an error message in a form:
45

---

3 Cascading Style Sheets
Figure 3.8: An alert box created with Bootstrap.
Figure 3.9: A button created with Bootstrap.
1 <div class="alert alert-success">
2 This alert box could indicate
3 a successful or positive action.
4 </div>
It is also very easy to create good-looking buttons:
1 <button type="button" class="btn btn-primary">
2 This is a primary button
3 </button>
Navigation Bars
It is also very easy to create navigation bars:
1 <nav class="navbar navbar-expand-sm bg-primary" data-bs-theme="dark">
2 <ul class="navbar-nav">
3 <li class="nav-item">
4 <a class="nav-link active" href="#">Active</a>
5 </li>
6 <li class="nav-item">
7 <a class="nav-link" href="#">Link</a>
8 </li>
9 <li class="nav-item">
10 <a class="nav-link disabled" href="#">Disabled</a>
11 </li>
12 </ul>
13 </nav>
46

---

3.8 Bootstrap
Figure 3.10: A navigation bar created with Bootstrap.
Forms with Bootstrap
Bootstrap makes it easy to create good-looking web-forms.
• Bootstrap provides multiple means to organize stacked or inline forms, present
error-messages etc.
Input elements usually come with a descriptive label.
• In a stacked form these elements are grouped by adiv-element with class mb-3
(Bootstrap 5).
• <div class="mb-3">...</div>.
Each input element is styled using specific CSS classes:
• Textual input:<input type="email" class="form-control">.
• A checkbox:<input class="form-check-input" type="checkbox">.
You can add the CSS-classesis-valid or is-invalid to visually reflect the validity of the
data.
• Additionally, you can add a <div class="invalid-feedback">...</div> element for
validation messages.
Example form
1 <h2>Login</h2>
2 <form action="/login">
3 <div class="mb-3">
4 <label for="email">Email:</label>
5 <input type="email" class="form-control is-valid" id="email"
6 placeholder="Enter email" name="email">
7 </div>
8 <div class="mb-3">
9 <label for="password">Password:</label>
10 <input type="password" class="form-control is-invalid" id="password"
11 placeholder="Enter password" name="password">
12 <div class="invalid-feedback">The password is not valid!</div>
13 </div>
14 <div class="mb-3 form-check">
15 <label class="form-check-label">
16 <input class="form-check-input" type="checkbox" name="remember"> Remember me
47

---

3 Cascading Style Sheets
Figure 3.11: A web-form created with Bootstrap.
17 </label>
18 </div>
19 <button type="submit" class="btn btn-primary">Login</button>
20 </form>
Result
3.9 Tailwind
Tailwind CSS
T ailwind CSS is a utility-first CSS framework.
• Instead of predefined components, it provides small utility classes.
• These classes directly map to CSS properties.
Example:
48

---

3.9 Tailwind
1 <div class="flex gap-2">
2 <div class="bg-yellow-300 p-2">Column 1</div>
3 <div class="bg-orange-400 p-2">Column 2</div>
4 </div>
Concept:
• Classes describe styling directly (e.g.p-2, bg-yellow-300).
• No custom CSS is required in many cases.
Tailwind vs Bootstrap
Both frameworks help to build responsive layouts, but follow different approaches.
• Bootstrap:
– Predefined components (buttons, navbars, forms)
– Higher-level abstraction
• T ailwind:
– Utility classes (low-level)
– More flexibility, but more verbose HTML
Example:
• Bootstrap: class="btn btn-primary"
• Tailwind: class="bg-blue-500 text-white px-4 py-2"
Responsive Design with Tailwind
Tailwind provides built-in support for responsive design using prefixes.
• Breakpoints are applied directly in class names.
Example:
1 <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
2 <div class="bg-yellow-300 p-2">1</div>
3 <div class="bg-orange-400 p-2">2</div>
4 <div class="bg-yellow-300 p-2">3</div>
5 </div>
49

---

3 Cascading Style Sheets
• md: applies styles from medium screens upwards
• lg: applies styles for large screens
3.10 Summary and Exercises
Summary
We learned today...
• what Cascading Style Sheets are and what they are used for.
• how CSS is embedded into HTML.
• how to use selectors to apply styles to one or more HTML elements.
• what the CSS box model is and how to control the different types of spacing.
• how to influence visibility, display, width and height.
• how to use Flexbox and CSS Grid to create responsive web-design.
• how to use CSS frameworks like Bootstrap and Tailwind.
Exercises 1
Recapitulate the content of this lecture.
• In which different ways can you add CSS to HTML?
• What is a selector and what different types of selectors can be used with CSS?
• Name CSS properties used to define fonts and backgrounds.
• What is the box-model of CSS?
• How can you define a 5px solid black border at the bottom of an HTML element?
• What does Responsive Web-Design mean, and how does CSS support that in
general?
• What is the advantage of the grid-system of Bootstrap in contrast of using a table
to create a multi-column web-design?
• What is the meaning of breakpoints in the Bootstrap grid-system?
• Which CSS classes are typically used to create a web form with Bootstrap?
50

---

3.10 Summary and Exercises
Exercises 2
Create a simple responsive web page usingBootstrap or T ailwind .
• The page should contain:
– A navigation bar at the top
– A layout withthree columns on large screens
– The columns shouldstack vertically on small screens
– A simple form (e.g. login or contact form)
Requirements:
• Use predefined classes (no custom CSS required)
• Apply responsive behavior (e.g. breakpoints or responsive classes)
• Use meaningful content (no placeholder like “lorem ipsum” only)
Optional:
• Add a button or alert component
• Improve visual appearance (spacing, colors)
51

---



---

4 JavaScript and Node.js
4.1 Introduction
Introduction
With pure HTML and CSS, we can createstatic web pages only.
• Such web pages do not change until you replace the files on the web server with
another version.
But a realweb application is more than just some static HTML files.
• In an application, we process user input, react to events, load and store data in a
database, etc.
In this context, HTML and CSS help us to build theuser interface of the application.
• But in order to implement dynamic behavior, we need a programming language.
The web server can be controlled by us.
• Here, we can basically use any programming language we like, e.g., Java, C#, …
• In browsers,JavaScript is the primary programming language.
JavaScript
JavaScript (official name is ECMAScript) is a dynamically typed scripting language.
• Dynamic typing means that the type of expression is determined at runtime, and
the data type of variable can change.
• JavaScriptmixesmultipleprogrammingconcepts(imperative, object-oriented, func-
tional, asynchronous, …).
JavaScript was originally designed by Netscape as an extension for the browser.
• Its main purpose was to react to user events, manipulate HTML pages, or validate
user input before it was sent to the server.
53

---

4 JavaScript and Node.js
Nowadays, we can execute JavaScript on the console using Node.js as well.
• Before we use JavaScript in the browser, we will look at its fundamentals and
Node.js first.
JavaScript Execution Model
JavaScript code runs on asingle main thread using anevent loop .
• Only one operation is executed at a time
• Long-running tasks (e.g. I/O, timers, network) are delegated.
• Completed tasks are placed in a queue and processed later.
Key idea:
• Non-blocking execution via callbacks, promises, and async/await.
Why is this important?
• Blocking the main thread freezes the application (e.g. UI becomes unresponsive)
• Explains why asynchronous programming is essential in JavaScript.
• Helps to understand behavior ofsetTimeout, fetch, and event handling.
Statements
JavaScript statements are, like in C, separated by a semicolon;
• Keywords and identifiers are case-sensitive, e.g.,let or for.
There is no main function serving as a starting point.
• A script simply starts with the statements to be executed.
Output can be printed using multiple methods of the predefinedconsole object.
• In the browser, that output is printed to the debugging console.
• In Node.js, the output is printed to the standard output.
1 console.log("Hello, World!");
2 console.info("Another message!");
3 console.clear();
4 console.table([1, 2, 3]);
54

---

4.2 Fundamentals of JavaScript
4.2 Fundamentals of JavaScript
Variables and expressions
Variables are declared withlet or const, e.g. let x = 5.
• Avoidvar due to its function scope.
• Identifiers, assignments, and operators behave as in C, Java, or C#:
1 let x = 5;
2 let result = x + 17 * 42 / 5;
JavaScript has 7 primitive types and one complex type (object):number, string, boolean,
null, undefined, symbol (unique identifiers, ES2015), andbigint (arbitrary-precision inte-
gers, ES2020).
• The type of a variable or an expression isautomatically derived .
• The type of a variablecan change during its lifetime.
You can determine the current type of a variable with thetypeof operator:
1 let x = 5;
2 console.log(typeof x); // returns "number"
String and number functions
Depending on the current type, JavaScript provides some methods for variables.
The following methods apply to numbers:
1 const a = 1234.123;
2 const b = a.toFixed(1); // 1234.1
3 const c = Number("10"); // 10
4 const s = a.toString(); // "1234.123"
A string provides different methods, e.g.:
1 const s = "Hello";
2 const pos = s.indexOf("ll");
3 const substring = s.slice(1, 2);
4 const newString = s.toUpperCase();
Since ES6, you can also use template literals for string interpolation:
55

---

4 JavaScript and Node.js
1 const name = "Alice";
2 const age = 25;
3 const text = `Name: ${name}, Age: ${age}`;
Math and Date
The Math object provides some useful functionality for arithmetic:
1 let value = Math.cos(0);
2 let rand = Math.random(); // number between 0 (inclusive) and 1 (exclusive)
3 let min_number = Math.min(-1, 0, 1, 2, 3);
4 let r = Math.round(17.4);
5 let c = Math.abs(-12);
Objects of typeDate can be used to represent a single timestamp.
1 let curDate = new Date(); // holds the current date
2 let count = curDate.getHours();
3 let newDate = new Date(2021, 2, 11, 0, 0, 0, 0);
Boolean types and conditional statements
In addition to numbers and strings, JavaScript also supports boolean and boolean ex-
pressions.
1 let x = true;
2 let y = x || (14 > 9);
As JavaScript is dynamically typed, you should use strict comparisons to respect the
data type:
1 let x = 10;
2 let a = (x == "10"); // a is true
3 let b = (x === "10"); // b is false
Boolean types are the basis for conditional statements:
1 if (time < 12) {
2 greeting = "Good morning";
3 } else {
4 greeting = "Good evening";
5 }
56

---

4.2 Fundamentals of JavaScript
Loops
JavaScript provides the well-known for-loop:
1 for (let i = 0; i < 10; i++) {
2 console.log(i);
3 }
Of course, the while-loop is available as well:
1 let i = 0;
2 while (i < 10) {
3 console.log(i);
4 i++;
5 }
The do-while-loop can be used too:
1 let i = 0;
2 do {
3 console.log(i);
4 i++;
5 } while (i < 10);
Arrays
JavaScript provides simple means for array handling:
1 let myArray = ["One", "Two", "Three"];
You can also mix types inside of an array:
1 let myArray = ["One", 2, 8.9, true];
Elements can be accessed via the index:
1 myArray[0] = "Peter";
2 let element = myArray[2];
And you can iterate over an array:
1 for (let i = 0; i < myArray.length; i++) {
2 console.log(myArray[i]);
3 }
57

---

4 JavaScript and Node.js
Arrays as dynamic data structures
Arrays can also be used as dynamic data structures.
• push() adds an element at the end.
• pop() removes the last element.
• shift() removes the first element.
• slice() returns a sub-array.
Examples:
1 let a = ["A", "B", "C"];
2
3 a.push("D"); // ["A", "B", "C", "D"]
4 let last = a.pop(); // last = "D", a = ["A", "B", "C"]
5
6 let first = a.shift(); // first = "A", a = ["B", "C"]
7
8 let sub = a.slice(0, 1); // ["B"]
Map, Filter and Reduce
Modern JavaScript provides powerful methods for processing arrays.
• map() transforms all elements.
• filter() keeps only matching elements.
• reduce() combines all elements into one result.
Examples:
1 let numbers = [1, 2, 3, 4];
2 let doubled = numbers.map(x => x * 2); // [2, 4, 6, 8]
3 let even = numbers.filter(x => x % 2 === 0); // [2, 4]
4 let sum = numbers.reduce((acc, x) => acc + x, 0); // 10
These methods are especially useful for concise and readable data processing.
58

---

4.2 Fundamentals of JavaScript
Example: Processing JSON data
Array methods are often used to process data loaded from external services.
1 const users = [
2 { name: "Alice", age: 17, active: true },
3 { name: "Bob", age: 25, active: false },
4 { name: "Carol", age: 31, active: true },
5 { name: "Dave", age: 22, active: true }
6 ];
7
8 const result = users
9 .filter(user => user.active && user.age >= 18)
10 .map(user => user.name.toUpperCase())
11 .reduce((acc, name) => acc + ", " + name);
12
13 console.log(result); // "CAROL, DAVE"
Error handling
JavaScript supports the well-known try-catch blocks:
1 try {
2 // do something
3 } catch (error) {
4 console.log(error);
5 } finally {
6 // This code is executed regardless of the result
7 }
Errors can be thrown using thethrow keyword.
• The throwable item can technically be of any type.
• Best practice: Always throw instances of theError class (or a subclass).
• This ensures you get a proper stack trace and a consistent.message property.
1 throw new Error("Something went wrong");
2 throw new TypeError("Expected a string but got a number");
59

---

4 JavaScript and Node.js
4.3 Functions and Callbacks
Functions
Of course, you can split code into reusable blocks calledfunctions.
1 function addNumbers(x, y) {
2 return x + y;
3 }
As you do not specify the type of parameters or the result, you can call the function
with all kinds of data.
• This might cause problems at runtime.
1 let result1 = addNumbers(5, 10);
2 let result2 = addNumbers("Hello", "World");
Most other aspects are the same as in C# or Java:
• The return statement leaves the function immediately.
• Variables declared within a function have a local scope.
Anonymous functions
Likeinfunctionalprogramminglanguages, functionsarefirst-classelementsinJavaScript.
• You can define a function as an expression and store it in a variable.
• This is called ananonymous function .
1 let addNumbers = function(x, y) {
2 return x + y;
3 }
Calling such a function is no different from calling a regularly defined one:
1 const result = addNumbers(5, 10);
With the arrow syntax, we can declare such a function in an even shorter way:
1 let addNumbers = (x, y) => { return x + y };
60

---

4.4 Objects and Classes
4.4 Objects and Classes
Objects
Objects holding multiple values as name/value pairs can be created from scratch:
1 const obj = {
2 firstname: "Alex",
3 lastname: "Stuckenholz",
4 age: 44
5 };
Of course, you can easily read and write properties of such objects:
1 obj.firstname = "Alexander";
2 console.log(obj.lastname);
It is also very easy to define arrays of such objects:
1 const people = [
2 { firstname: "Alex", lastname: "Stuckenholz" },
3 { firstname: "Helene", lastname: "Fischer" }
4 ];
JSON
With JavaScript, it is very easy to convert objects to a string representation and vice
versa.
• Such strings are calledJavaScript Object Notation (JSON) .
• We will later see that JSON is a great way to transfer machine-readable data
between a server and a client.
With JSON.stringify(), you convert objects to a string:
1 const obj = { firstname: "Alex", lastname: "Stuckenholz" };
2 const str = JSON.stringify(obj);
Such a string can be converted back to objects usingJSON.parse():
1 const obj = JSON.parse(str);
This also works with arrays of objects.
61

---

4 JavaScript and Node.js
Classes
JavaScript originally did not support the concept of a class.
• Objects were derived from a prototype, which is basically a special function.
ECMAScript 6 introduced syntactical sugar to write classes as in Java or C#.
• This also includes single-class inheritance with the keywordextends.
1 class Person {
2 constructor(firstname, lastname) {
3 this.firstname = firstname;
4 this.lastname = lastname;
5 }
6 toString() {
7 return this.firstname + " " + this.lastname;
8 }
9 }
With such a class, you can create objects with thenew operator.
1 let p = new Person("Alex", "Stuckenholz");
Modern JavaScript (ES2015+)
ECMAScript2015(ES6)andlaterversionsintroducedmanyimprovementstoJavaScript.
• Some of these feature came from transpiled languages like CoffeeScript or Type-
Script.
Key modern JavaScript features:
• Arrow functions:const times = (a, b) => a * b;
• Destructuring: const { name, age } = person;
• Spread operator: const copy = [...array];
• Optional chaining:const city = user?.address?.city;
• Nullish coalescing: const name = user.name ?? "Unknown";
These features are fully supported in all modern browsers and in Node.js.
62

---

4.5 Promises and Async/Await
4.5 Promises and Async/Await
Asynchronous Programming
JavaScript is often executed in scenarios in whichreacting to events plays a key role.
• However, the occurrence of events cannot be predicted.
• You never know when a user clicks a button or when loading data from an external
server will finish.
Handling events with regular sequential programming is not very effective.
• Actively polling the state of a button could cause the program to freeze more often
than necessary.
With asynchronous programming, we can handle events in a much more effective way.
• Here, the program processes events via an infiniteevent loop .
• Events are processed in the order of appearance.
Handling events with asynchronous programming is a key feature of JavaScript.
Callbacks
In JavaScript, the main way to handle events is throughcallbacks.
• A callback is basically an anonymous function that is attached to an event.
In the following example, we want to be informed about the completion of a function
test:
• We pass a callbackcb to the functiontest.
• The callbackcb is called exactly whentest is completed.
1 function test(callback) {
2 // Do some resource intensive task
3 callback();
4 }
5
6 let cb = function() {
7 console.log("Task is finished!");
8 }
9
10 test(cb);
63

---

4 JavaScript and Node.js
SetTimeout and SetInterval
JavaScript has multiple built-in functions that work in an asynchronous fashion.
• A simple example issetTimeout(), which raises an event after a certain amount of
time.
The following example prints a message to the console after 2 seconds:
1 setTimeout(() => { console.log("Delayed message!"); }, 2000);
2 console.log("Message");
These messages appear in the following order:
1 Message
2 Delayed message!
With setInterval(), you can raise events periodically, e.g., every 500 milliseconds.
1 setInterval(() => { console.log(Date.now()); }, 500);
Pyramid of Doom
In reality, we often need to chain callbacks to handle events in a certain order.
• For example: When a button is clicked, load data from server 1 and pass that data
to server 2, ...
Expressing such event chains only with callbacks creates complex code very quickly.
• Especially when handling different states like errors, this tends to become unread-
able.
1 button('onclick', function() {
2 get('/api1', function(data) {
3 get('/api2', function(data) {
4 // process the data
5 });
6 });
7 });
Thus, such nested structures are also called thePyramid of Doom .
64

---

4.5 Promises and Async/Await
Promises
Instead of using callbacks, we can usePromises (ES6).
• A promise represents the future result of an asynchronous operation.
• It is apromise to deliver exactly one value (or an error) at some point.
• The promise object is returned immediately, while the operation continues in the
background.
A promise can be in one of three states:
• pending – still running
• fulfilled – successfully completed with a value
• rejected – failed with an error
A promise delivers its resultexactly once .
Subscribe to state changes
A promise’s key feature is subscribing to state changes.
• You can do that by using thethen() function of the promise object.
• Errors can be handled with thecatch() method.
It is easily possible to chain such checks:
1 fetch('/article/promise-chaining/user.json')
2 .then(response => response.json())
3 .then(user => fetch(`https://api.github.com/users/${user.name}`))
4 .then(response => response.json())
5 .then(githubUser => new Promise((resolve, reject) => {
6 let img = document.createElement('img');
7 img.src = githubUser.avatar_url;
8 document.body.append(img);
9 }))
10 .catch(error => alert(error.message));
65

---

4 JavaScript and Node.js
Async and Await
In addition to promises, ECMAScript 6 also introduced the two keywordsasync and
await.
• The await operator can only be applied inside a function that is marked asasync.
The await operator can be applied to a function call returning a promise object.
• It pauses execution of theasync function until the promise resolves or rejects.
• If the promise object returns an error, an exception is thrown.
Thus, handling asynchronous functions becomes much easier:
1 async function loadData() {
2 try {
3 let result = await fetch("http://jsonplaceholder.typicode.com/users");
4 console.log(result);
5 } catch (error) {
6 console.log(error);
7 }
8 }
4.6 RxJS
From Promises to Observables
Promises represent asingle future value .
• They resolve once and then are finished.
However, many applications deal with astream of multiple values over time, e.g.:
• user input events (e.g. typing),
• WebSocket messages,
• continuously changing data.
For such scenarios, we useObservables.
• ObservablesarepartoftheRxJSlibrary(RxJS= Reactive Extensions for JavaScript).
• It is widely used in modern JavaScript applications, especially in Angular.
• In Angular, RxJS is included by default and can be used without additional in-
stallation.
66

---

4.6 RxJS
• With regular JavaScript, you can install it via npm (see later).
Promises vs Observables
The fetch() function returns apromise representing a single future value.
1 fetch('/api/data')
2 .then(response => response.json())
3 .then(data => console.log(data));
In Angular, HTTP requests returnobservables (RxJS):
1 this.http.get('/api/data')
2 .subscribe(data => console.log(data));
Key differences:
• Promise: deliversexactly one value
• Observable: can delivermultiple values over time
• Observable: starts only on subscribe()
Working with Observables
Another key feature of observables is the many operators for processing emitted values.
• We can easily build pipes of operators to transform, filter, or combine values, e.g.:
1 this.http.get<number[]>('/api/numbers').pipe(
2 tap(values => console.log(values)),
3 map(values => values.map(x => x * 2)),
4 filter(values => values.length > 0)
5 ).subscribe(result => {
6 console.log(result);
7 });
Explanation of operators:
• pipe() defines a processing pipeline with multiple operators
• tap() allows performing side effects without changing the data
• map() transforms each emitted value into a new value
• subscribe() starts the observable and receives the results
67

---

4 JavaScript and Node.js
4.7 Node.js and NPM
Node.js
JavaScript can also run outside the browser usingNode.js.
• Node.js is an open-source JavaScript runtime based on Chrome’s V8 engine.
• It is required for modern tooling, e.g. Angular, npm.
Node.js can be downloaded fromhttps://nodejs.org (LTS version recommended).
• To manage different versions, you can use tools likenvm (Node Version Manager).
Node.js is used via the command line, e.g.node --version.
• JavaScript files can be executed directly:node script.js.
Node.js comes with some CLI tools.
• npm installs and manages packages, e.g.:npm install express
• npx runs packages without global installation, e.g.:npx @angular/cli new my-app
Asynchronism with Node.js
A key concept of Node.js isasynchronous programming .
• I/O operations (file, network) are non-blocking.
Modern JavaScript usesasync/await instead of callbacks.
1 import { readFile } from 'fs/promises';
2
3 async function loadFile() {
4 try {
5 const data = await readFile('file.txt', 'utf8');
6 console.log(data);
7 } catch (err) {
8 console.error(err);
9 }
10 }
11
12 loadFile();
68

---

4.7 Node.js and NPM
Creating a simple web-server
Node.js can be used to create server-side web-applications.
• Therefore, we need to import the http module.
1 import http from 'http';
2
3 const handleRequest = (req, res) => {
4 res.writeHead(200, { 'Content-Type': 'text/plain' });
5 res.end('Hello World\n');
6 };
7
8 const server = http.createServer(handleRequest);
9 server.listen(8080);
The callback handles incoming requests on Port 8080.
• Here, we only reply with a simple response.
Instead of using the raw http module, you can also use a web framework like Express.
ES Modules
Modern JavaScript uses ES Modules for structuring code.
• In Node.js, ES Modules are enabled via"type": "module" or .mjs files.
• ES Modules allows splitting code into reusable files (modules) being used by e.g.
Angular.
• ES6 introduced new keywordsexport and import.
Example: Exporting frommath.js
1 export const pi = 3.142;
2 export function add(a, b) { return a + b; }
3 export default function multiply(a, b) { return a * b; }
Importing in another file:
1 import multiply, { pi, add } from './math.js';
Named exports → imported with{ }
• Default export → imported without braces
69

---

4 JavaScript and Node.js
From Modules to Packages
ES Modules structure codewithin a project.
• A module is a single file usingexport and import.
In real-world applications, we reuse code from other projects.
• These reusable units are calledpackages.
• A package typically contains multiple modules.
Packages are distributed via theNode Package Manager (NPM) .
• Installed from a central repository:https://www.npmjs.com
• The repository contains packages for almost any use case
• NPM served as a blueprint for other package managers, e.g. NuGet.
Packages and Installation
A Node package is a collection of modules plus metadata in a filepackage.json.
• It defines dependencies, scripts, and configuration.
• Packages can depend on other packages (dependency tree).
Packages are installed usingnpm, e.g.: npm install express
• By default, packages are installed locally into directorynode_modules.
• Packages are then available within the current project.
• That directory should beignored in version control (e.g., via.gitignore).
Global installation of packages is possible but discouraged:
• npm install -g package (may cause version conflicts)
70

---

4.8 Summary and Exercises
Managing dependencies
A Node project is defined by apackage.json file listing its dependencies, e.g.:
1 {
2 "name": "eduweb",
3 "version": "0.0.1",
4 "type": "module",
5 "scripts": {
6 "start": "node server.js"
7 },
8 "dependencies": {
9 "express": "^4.18.0"
10 }
11 }
A new Node project is initialized withnpm init -y.
• Installpackages(andaddthemautomaticallyasdependencies): npm install <package>.
• Install all dependencies from thepackage.json file: npm install.
4.8 Summary and Exercises
Summary
We learned today...
• the essentials of JavaScript.
• how functions and callbacks are created.
• how to handle objects and classes.
• how to handle asynchronism in JavaScript.
• what Node.js is and how to create simple scripts with it.
• what modules and packages are and how to use the Node Package Manager.
• how to manage dependencies of Node.js scripts.
71

---

4 JavaScript and Node.js
Exercise 1
Conceptual questions:
• What does it mean that JavaScript is dynamically typed?
• What is the difference betweenlet and const?
• What are primitive data types in JavaScript?
• What is a function and how can it be defined in JavaScript?
• What is an object and how do you access its properties?
• What is a callback and when is it used?
• What problem do promises solve compared to callbacks?
• What is the difference betweenthen() and await?
• Why is asynchronous programming important in JavaScript?
Exercise 2
Write a Node.js script and execute it on the command line:
• Use fetch() to load data from:https://jsonplaceholder.typicode.com/users
• Convert the response to JSON.
Process the data using modern JavaScript:
• Extract all users living in a city starting with"S"
• Transform the result into a list of names (uppercase)
• Combine all names into a single string
Requirements
• Use async/await
• Use map(), filter(), reduce()
Output the result usingconsole.log().
72

---

5 JavaScript in the Browser
5.1 JavaScript in the Browser and the Document Object Model
JavaScript in the Browser
In the last lecture we learned some fundamentals about JavaScript.
• Statements and expressions, variables, control structures, asynchronous program-
ming, …
We have also seen that we can execute JavaScript with Node.js on the console.
• We created scripts to read files and to implement a simple web-server.
• We have also seen how to use the Node Package Manager.
But, the origin and the main purpose of JavaScript is to enrich web pages with dynamics
inside the web browser.
• Here, we can react on all kinds of user events and manipulate the content of a web
page.
Today, we will see how to use JavaScript together with HTML documents inside a web
browser.
Embedding JavaScript into HTML
JavaScript code can be embedded into an HTML document using thescript tags.
1 <script>console.log("Hello, World!");</script>
You can embed as many such scripts into an HTML document as needed.
• A script is executed as soon as the browser reaches the corresponding script block.
• The rest of the document might not yet load completely.
You can also place the JavaScript code into an external file.
73

---

5 JavaScript in the Browser
• Hence, it is easier to reuse the same script in multiple documents.
• Scripts are typically loaded using thedefer attribute:
• <script src="app.js" defer></script>
The defer attribute delays script execution until the document is fully parsed.
Debugging JavaScript
If JavaScript is executed in the browser, you cannot directly see error messages or ex-
ceptions.
• This makes the process of evolving code more complicated.
However, all web browsers provide adebugging console .
• Here, you can see error messages and debug JavaScript code.
In the Chrome browser you can find the debugging console under ”Developer Tools”.
Document Object Model
The main reason to use JavaScript in the browser is to access and manipulate the content
of the current HTML document.
• Due to security reasons you are not allowed to access the local machine with
JavaScript in a browser.
To access the HTML document, the browser provides theDocument Object Model
(DOM).
• The DOM is a standardized representation of all HTML elements, their attributes,
and styles.
• Its structure is a tree of HTML elements with a single root.
74

---

5.1 JavaScript in the Browser and the Document Object Model
Figure 5.1: The debugging console in the Chrome browser.
75

---

5 JavaScript in the Browser
Figure 5.2: The DOM is a tree of HTML elements. Image source: [8]
76

---

5.2 Document, Elements and Events
Figure 5.3: The type hierarchy of the DOM. Image source: [10].
Type Hierarchy
With JavaScript, you can use the API of the DOM to...
• find, change, add or remove elements, attributes or styles.
• subscribe to all HTML events in the web page.
The types of the elements are organized in an object-oriented type hierarchy.
• Subtypes extend their supertypes by additional functionality.
• A HTMLInputElement provides more functionality than a simpleNode.
5.2 Document, Elements and Events
Document
The entry-point to the DOM is the objectdocument.
• It is the owner of all other objects in your web page and provides a multitude of
properties and methods, e.g. direct access to certain parts of the web page:
77

---

5 JavaScript in the Browser
1 const body = document.body;
2 const title = document.title;
3 const head = document.head;
You can use multiple methods to find specific elements:
1 let element = document.getElementById("demo");
2 let p_elements = document.getElementsByTagName("p");
3 let important = document.getElementsByClassName("important");
The modern approach uses CSS-selector-based methods:
1 let first = document.querySelector("#demo"); // first match
2 let all = document.querySelectorAll(".important"); // NodeList
3 let input = document.querySelector("form input[type='email']");
Those functions may returnnull, if no such element could be found.
Elements
Most of the time an object fetched from the DOM is a sub-type ofElement.
• It provides a rich API with multiple properties, methods and events.
1 let element = document.getElementById("demo");
2 element.style.backgroundColor = "red";
3 element.innerHTML = "<p>This is some text</p>";
4 element.remove();
You can access parent, child, or sibling elements and thus navigate through the DOM:
1 let parent = element.parentElement;
2 let children = element.children;
3 let sibling = element.nextSibling;
An element holds a list of attribute objects.
• A single attribute has a name and a value.
1 let length = element.attributes.length;
2 let attribute_name = element.attributes[0].name;
78

---

5.2 Document, Elements and Events
Figure 5.4: The background color of the headline changes when the mouse is moved
over it.
Mouse events
Multiple DOM objects provide events to which we can attach callbacks.
• We can e.g. react on multiple events raised by the mouse:
• e.g. onclick, ondblclick, onmousedown, onmouseup, onmouseover, onmouseout.
1 <h1 id="headline">Mouse Over Me</h1>
2 <script>
3 const h = document.querySelector("#headline");
4
5 h.addEventListener("mouseover", () => {
6 h.style.backgroundColor = "red";
7 });
8
9 h.addEventListener("mouseout", () => {
10 h.style.backgroundColor = "white";
11 });
12 </script>
Example
In the following example we attach to the click-event of a button.
79

---

5 JavaScript in the Browser
Figure 5.5: A new div is added to the container each time the button is clicked.
• Each time the button is clicked we add a new div-block to the document.
1 <button id="button">Click</button>
2 <div class="container" id="container"></div>
3 <script>
4 let button = document.getElementById("button");
5 button.addEventListener("click", () => {
6 const div = document.getElementById("container");
7 const newDiv = document.createElement("div");
8 newDiv.appendChild(document.createTextNode("Text"));
9 newDiv.classList.add("alert", "alert-primary");
10 div.appendChild(newDiv);
11 });
12 </script>
Event Delegation
Attach one event handler to a parent instead of many elements.
• This technique is calledevent delegation .
80

---

5.2 Document, Elements and Events
• It relies onevent bubbling (events propagate up the DOM tree).
Example: Handle clicks on list items via the parent:
1 document.querySelector("#list").addEventListener("click", (event) => {
2 const li = event.target.closest("li");
3 if (li) {
4 console.log("Clicked:", li.textContent);
5 }
6 });
Advantages:
• Fewer event listeners→ better performance
• Works for dynamically added elements
• Cleaner and more maintainable code
Browser Object Model
Inside the browser the DOM is not the only object that can be used.
• The Browser Object Model (BOM) provides information about the browser
and the local system.
The main object of the BOM iswindow providing multiple properties:
• window.navigator can be used to read some meta-data about the browser and the
system.
• window.history provides access to the browser history.
• window.screen provides information about the user’s screen.
• window.location holds some properties about the current document and its URL.
You can e.g. read the window size or open a new browser tab.
1 console.log(window.innerWidth + " -- " + window.innerHeight);
2 window.open("https://www.spiegel.de");
81

---

5 JavaScript in the Browser
5.3 Native DOM API
Modern DOM Manipulation
Modern browsers provide native APIs that make libraries like jQuery unnecessary in
many cases.
• querySelector / querySelectorAll — find elements with CSS selectors.
• classList — add, remove, and toggle CSS classes.
• addEventListener — attach event handlers.
• fetch() — load data asynchronously from URLs.
Toggling background color on a button click without any library:
1 <p id="test">This is a paragraph.</p>
2 <button id="btn">Toggle Color</button>
3 <script>
4 let toggled = false;
5 document.querySelector("#btn").addEventListener("click", () => {
6 const p = document.querySelector("#test");
7 p.style.backgroundColor = toggled ? "white" : "green";
8 toggled = !toggled;
9 });
10 </script>
classList
The classList property gives convenient access to an element’s CSS classes.
• add() and remove() add or remove a class.
• toggle() adds the class if absent, removes it if present.
• contains() checks whether the class is currently assigned.
Example — highlighting a list item on click:
1 <ul id="items">
2 <li>Item 1</li>
3 <li>Item 2</li>
4 </ul>
5 <script>
6 document.querySelectorAll("#items li").forEach(li => {
7 li.addEventListener("click", () => {
8 document.querySelectorAll("#items li") // highlight clicked item
9 .forEach(el => el.classList.remove("table-info"));
82

---

5.4 Canvas
10 li.classList.add("table-info");
11 });
12 });
13 </script>
Form Validation with Native DOM
We can validate a web-form without any external library using the native DOM API.
1 <form id="loginForm">
2 <input type="email" id="email" placeholder="Email">
3 <input type="password" id="password" placeholder="Password">
4 <button type="submit">Login</button>
5 </form>
6 <script>
7 document.querySelector("#loginForm").addEventListener("submit", (event) => {
8 event.preventDefault();
9 const email = document.querySelector("#email").value;
10 const emailInput = document.querySelector("#email");
11
12 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
13 if (!emailRegex.test(email)) {
14 emailInput.classList.add("is-invalid");
15 } else {
16 emailInput.classList.remove("is-invalid");
17 // proceed with login
18 }
19 });
20 </script>
5.4 Canvas
HTML Canvas
The <canvas> element provides a bitmap area for JavaScript-based graphics.
• A canvas is just a rectangular area in the page — all drawing is done via JavaScript.
• Drawing is pixel-based; canvas content is not part of the DOM tree.
To draw on a canvas you first obtain the 2D rendering context:
1 <canvas id="myCanvas" width="400" height="200" style="border: 1px solid black;"></canvas>
2 <script>
3 const canvas = document.querySelector("#myCanvas");
4 const ctx = canvas.getContext("2d");
83

---

5 JavaScript in the Browser
5
6 // Draw a filled blue rectangle
7 ctx.fillStyle = "blue";
8 ctx.fillRect(50, 30, 120, 80);
9
10 // Draw a red outline rectangle
11 ctx.strokeStyle = "red";
12 ctx.lineWidth = 3;
13 ctx.strokeRect(220, 30, 120, 80);
14 </script>
Drawing on Canvas
The Canvas 2D API provides basic drawing primitives.
Drawing a shape:
1 ctx.beginPath();
2 ctx.moveTo(50, 150);
3 ctx.lineTo(200, 50);
4 ctx.lineTo(350, 150);
5 ctx.closePath();
6 ctx.fill();
7 ctx.stroke();
Drawing a circle:
1 ctx.beginPath();
2 ctx.arc(200, 100, 60, 0, Math.PI * 2);
3 ctx.fill();
Drawing text:
1 ctx.fillText("Hello Canvas!", 50, 170);
Canvas Animation
Animations are created by repeatedly redrawing the canvas.
• Each frame: clear → draw → schedule next frame
1 function animate() {
2 ctx.clearRect(0, 0, canvas.width, canvas.height); // clear
3
4 ctx.beginPath();
5 ctx.arc(x, 100, 20, 0, Math.PI * 2); // draw
84

---

5.5 Geolocation
6 ctx.fill();
7
8 x = (x + 2) % canvas.width;
9
10 requestAnimationFrame(animate); // next frame
11 }
12
13 animate();
5.5 Geolocation
Geolocation API
The Geolocation API allows a web page to access the user’s location.
• The browser asks the user for permission
• Works on desktop (WiFi/IP) and mobile (GPS)
Current position can be requested via:
• navigator.geolocation.getCurrentPosition()
• Returns latitude and longitude coordinates.
Important aspects:
• Requires a secure context (HTTPS).
• Accuracy depends on device and environment.
• May fail if permission is denied.
Geolocation Example
We can use the Geolocation API to get the user’s current location and log it to the
console:
1 function getLocation() {
2 navigator.geolocation.getCurrentPosition(
3 (pos) => {
4 const { latitude, longitude } = pos.coords;
5 console.log(`Lat: ${latitude}, Lon: ${longitude}`);
6 },
7 (err) => {
8 console.error("Error:", err.message);
9 }
85

---

5 JavaScript in the Browser
10 );
11 }
Here, success and error are handled via callbacks.
• Coordinates are available inpos.coords.
• Can be combined with map services (e.g. Google Maps).
Fetch API
The F etch API is used to make HTTP requests in the browser.
• fetch(url) asynchronously returns aPromise.
• The body must be parsed, e.g.response.json().
Basic GET request:
1 fetch("https://jsonplaceholder.typicode.com/users")
2 .then(res => {
3 if (!res.ok) {
4 throw new Error("HTTP error: " + res.status);
5 }
6 return res.json();
7 })
8 .then(data => console.log(data))
9 .catch(err => console.error(err));
Network errors throw an error, but HTTP errors (404)do not reject the promise.
• You need to check the status inres.ok.
Fetch with async / await
The same request can be written more clearly usingasync/await.
1 async function loadUsers() {
2 try {
3 const res = await fetch("https://jsonplaceholder.typicode.com/users");
4 if (!res.ok) throw new Error("HTTP error");
5 const data = await res.json();
6 console.log(data);
7 } catch (err) {
8 console.error(err);
9 }
10 }
11 loadUsers();
86

---

5.6 Consuming RESTful services
Advantages:
• More readable than chainedthen().
• Easier error handling withtry/catch().
• Looks like synchronous code.
Fetch Example — Dog Images
The following example loads a random dog image when the button is clicked.
• We use the Fetch API instead of any external library.
1 <div class="container">
2 <button type="button" id="loadBtn">Load Dog</button>
3 <br>
4 <img id="dog" alt="Random dog">
5 </div>
6 <script>
7 document.querySelector("#loadBtn").addEventListener("click", async () => {
8 try {
9 const response = await fetch("https://dog.ceo/api/breeds/image/random");
10 if (!response.ok) throw new Error("HTTP error");
11 const result = await response.json();
12 document.querySelector("#dog").src = result.message;
13 } catch (error) {
14 console.error("Failed to load image:", error);
15 }
16 });
17 </script>
5.6 Consuming RESTful services
RESTful Services
Web applications often exchangestructured data with external systems.
• e.g. users, products, orders (typically as JSON)
Such systems are calledW eb Services.
• They are accessed via HTTP
• They return machine-readable data (usually JSON)
A widely used architectural style isREST.
87

---

5 JavaScript in the Browser
• Resources (data objects) are accessed via URLs
• Standard HTTP methods are used to interact with them
In this course:
• We consume REST APIs using JavaScript (fetch)
• Later: how to implement such services in the backend
REST Concepts
In REST, data is modeled asresources accessible via URLs.
• Collection of resources→ https://api.example.com/users
• Single resource→ https://api.example.com/users/1
CRUD operations:
• GET → read data
• POST → create new resource
• PUT → replace a resource
• PATCH→ partially update a resource
• DELETE → remove resource
Typical response format:
• JSON (JavaScript Object Notation)
Fetch API — POST Request
Fetch also supports POST, PUT, DELETE and other HTTP methods.
• Hence, we can use it to interact with RESTful services.
• e.g. creating a new resource with a POST request:
88

---

5.7 Summary and Exercises
1 async function createUser(name) {
2 const response = await fetch("https://jsonplaceholder.typicode.com/users",
3 {
4 method: "POST",
5 headers: { "Content-Type": "application/json" },
6 body: JSON.stringify({ name: name })
7 }
8 );
9 const newUser = await response.json();
10 console.log("Created with id:", newUser.id);
11 }
5.7 Summary and Exercises
Summary
Today, we learned...
• what we can do with JavaScript as part of an HTML document inside the browser.
• how to access and manipulate the DOM using the native DOM API.
• how to usequerySelector, querySelectorAll and classList.
• what the BOM is and what properties it provides.
• how to draw shapes, paths, text and animations using the<canvas> element.
• how to access the user’s location using the Geolocation API.
• how to make asynchronous HTTP requests using the Fetch API.
• what RESTful services are and how to consume them with the Fetch API.
Exercise 1
Conceptual questions:
• Why can JavaScript in the browser not access the local file system of the user’s
computer?
• Explain the role of the DOM for JavaScript applications.
• How can you select an element with idmessage using querySelector?
• Name common mouse events used withaddEventListener.
• What is the purpose of the BOM (Browser Object Model)?
89

---

5 JavaScript in the Browser
Mini tasks:
• Toggle the visibility of an element usingclassList.toggle().
• Draw basic shapes on a canvas (rectangle, circle, triangle).
Exercise 2
Build a small web page that loads and displays user data from a public REST API:
• Load user data from:https://jsonplaceholder.typicode.com/users
Requirements:
• Use the Fetch API withasync/await.
• Display all users in a list (name + email)
• Add a button to reload the data
Extension (optional):
• Filter users by city (input field)
• Highlight selected users
• Show details of a user when clicked
90

---

6 Single Page Applications and Angular
6.1 TypeScript
Why TypeScript?
JavaScript is flexible, but this can become problematic in larger applications.
• Many errors are only detected at runtime.
• Dynamic typing may lead to unexpected behavior.
• Maintaining large code bases becomes harder.
Example:
• function add(x, y) { return x + y }
• add("5", 1) // "51"
To improve code quality, modern web development often uses:
• Linters for static code analysis
• TypeScript for static typing and better tooling
TypeScript
TypeScript is a superset of JavaScript developed by Microsoft.
• It adds astatic type system to JavaScript.
• Type errors can be detected before the code is executed.
• TypeScript code is transpiled to plain JavaScript.
Example:
1 function add(x: number, y: number): number {
2 return x + y;
3 }
91

---

6 Single Page Applications and Angular
The TypeScript compiler can be installed via NPM:
• npm install -g typescript
• Compile withtsc script.ts
Classes
TypeScript supports classes with typed properties and access modifiers.
1 export class Fraction {
2 private numerator: number;
3 private denominator: number;
4
5 constructor(n: number, d: number) {
6 this.numerator = n;
7 this.denominator = d;
8 }
9
10 get value(): number {
11 return this.numerator / this.denominator;
12 }
13 }
Decorators
Decorators extend classes or class members.
• Decorators are applied using@.
• They are widely used in Angular.
1 function addSpeed(target: Function) {
2 return class extends target {
3 speed = 100;
4 }
5 }
6
7 @addSpeed
8 class Car {}
92

---

6.2 Single Page Applications and Angular
Figure 6.1: Traditional web request lifecycle. Image source:
https://www.c-sharpcorner.com/uploadfile/rahul4_saxena/single-p
age-application-spa-using-angularjs-web-api-and-m/
6.2 Single Page Applications and Angular
Traditional request cycle
Let’s get back to the development of web-applications.
Intraditionalweb-applicationsweseeacertainweb-requestlifecyclebetweenwebbrowsers
and web-servers.
Most user activities cause the web browser to request new documents from the web-
server.
• e.g. clicking on a hyperlink or submitting a form.
• The web browser then completely replaces its DOM with the document that is
returned by the web-server.
Disadvantages
That request life-cycle has some disadvantages:
It creates a high load on the web-server.
93

---

6 Single Page Applications and Angular
Figure 6.2: The life-cycle of a Single Page Application. Image source:
https://www.c-sharpcorner.com/uploadfile/rahul4_saxena/single-p
age-application-spa-using-angularjs-web-api-and-m/
• Each user-activity loads a full new document, even if only some data was needed
to be rearranged in the client.
It requires a stable network connection.
• As the web browser is basically only a stupid presenter of the server results, the
application is not usable if the connection to the server is weak.
The web-application feels less interactive.
• As dropping a request and loading the new document takes some time, the appli-
cation is way less reactive than a local application.
Single Page Applications
To overcome those drawbacks the concept ofSingle Page Applications (SP A) was
introduced.
SPAs make heavy use of JavaScript and AJAX to radically change the page lifecycle.
94

---

6.2 Single Page Applications and Angular
Functionality of SPAs
An SPA does not replace the whole document in the browser in case of a user activity.
• An SPA loads the most content of an application in an initial request.
• All the logic, all the user interface, ...
Navigating between different dialogs means that some JavaScript logic replaces parts of
the DOM by preloaded HTML.
• If needed, additional data is fetched as JSON by means of AJAX in subsequent
requests.
• Such requests do not reload the document in the client.
Although, this methodology is complex to implement it has multiple advantages:
• It creates less load on the server and can also operate in offline-scenarios.
• It feels more interactive.
• An SPA can also be converted into a mobile app.
Angular
Implementing an SPA is a complex task without additional tools.
• We need to bundle HTML templates and JavaScript into one big chunk.
• We need to allow navigation between dialogs, fill templates with data etc.
Luckily, there are lots of libraries that help you with the development of such SPAs.
• Examples are Vue.js, Backbone.js, Knockout.js, React, …
A very popular alternative isAngular.
• Angular is an open-source web application framework to create SPAs.
• Its development was initiated by Google originally.
We will use Angular to implement SPAs for the rest of this course.
95

---

6 Single Page Applications and Angular
Key Concepts of Angular
Angular is written in TypeScript.
• When using Angular we have to write our code in TypeScript as well.
• The tools of Angular are then responsible to bundle the app to one single chunk.
• During this process our TypeScript code is transpiled to JavaScript as well.
Angular is more than a library.
• Angular forces the developer to create things in a very specific way.
• Hence, Angular is a framework.
Angular makes use of multiple best practices from software engineering.
• It structures the application in a certain way (modules, components and services).
• It uses a built-in dependency injection mechanism to manage dependencies.
• It provides means to bind data to views and to map URLs to certain activities in
the app.
Angular Components
Usually, we are bound to a set of pre-defined HTML-tags when creating web pages.
• The concept of a button (visual representation, attributes, event) is a fixed part
of HTML.
• We can not define new elements to e.g. represent a login-form.
• Angular changes exactly that (more or less).
The key building block of Angular are customComponents.
• Each component is represented by a new custom HTML-tag, e.g.<app-test>.
• A component has an own visual representation, which is defined by a template.
• A component can define custom attributes and events.
• Components can also interact with each other.
It is crucial to learn how to implement and use components when using Angular.
96

---

6.3 Angular CLI
Figure 6.3: Creating a new Angular app with the CLI.
6.3 Angular CLI
Creating new apps with Angular
To write Angular apps, you need Node.js installed locally.
• We can then use npx to generate a new Angular app:npx @angular/cli new test
• This downloads the Angular CLI and runs it to create a new app.
A wizard will guide you through some questions.
• You can e.g. select the style system to be used (CSS, SCSS, SASS, …)
Run the application
Now, the Angular CLI is installed locally and the new app is created.
• We can use the CLI to build and run the app:npx ng serve
• A local web-server is started that serves the app athttp://localhost:4200.
This web-server also detects code-changes on the fly.
97

---

6 Single Page Applications and Angular
Figure 6.4: Running the Angular app with the CLI.
• Hence, it automatically rebuilds and restarts which is pretty handy for develop-
ment.
Result
6.4 Folder Structure and Boot Process
Angular Directory Structure
A new Angular application already contains multiple directories and files:
The fileangular.json contains multiple global settings.
• Here, we can add global stylesheets or external JavaScript libraries.
The directorynode_modules contains all the Node.js packages Angular depends on.
• We can add more packages by using thenpm command.
The directorysrc/app contains the actual source-code of the application.
• Here we also add our own TypeScript code.
The filesrc/index.HTML depicts the main entry point of the application.
• As Angular bundles and boots the application in a certain way, we usually do not
have to touch this file at all.
98

---

6.4 Folder Structure and Boot Process
Figure 6.5: The newly created Angular app in the browser.
99

---

6 Single Page Applications and Angular
Angular Boot Process
Usually programs start with a main-function and so does Angular.
• The filemain.ts contains the code that is executed first, when an Angular app is
started.
• The key task is to transfer control to the app’sroot component .
• This is calledbootstrapping the app.
1 import { AppComponent } from './app/app.component';
2
3 bootstrapApplication(AppComponent, appConfig)
4 .catch((err) => console.error(err));
Angular applications are composed ofComponents.
• Components define reusable UI building blocks (custom HTML elements).
• Each component consists of a template, logic, and metadata.
6.5 Components
Components
An angular component consists of multiple files of which one file contains a TypeScript
class.
• That class implements the actual logic of a component.
• Here, we may configure property or event binding (later more).
Angular treats a TypeScript class as a component if it is decorated with@Component.
• The decorator of the root component looks like this:
1 @Component({
2 selector: 'app-dashboard',
3 imports: [RouterLink, DatePipe, StatusBadgeComponent],
4 templateUrl: './dashboard.component.html'
5 })
6 export class DashboardComponent {
7 }
100

---

6.5 Components
Figure 6.6: The output of the modified root component in the browser.
Selector, Template and Imports
The decorator of a component defines some very important things:
The selector tells Angular to instantiate the component when it appears in the HTML
tree.
• InmostcasesacomponentrepresentsacompleteHTMLelement, e.g. <app-root></app-root>
• But, a component may also realize an attribute or a CSS-class.
The templateUrl points to the HTML template of the component.
• The template defines the component’s DOM view using standard HTML.
• You can usetemplate instead of an external file to define an inline template.
The imports array defines other components, directives and pipes that are used in the
template of the component.
Default Template
The template of the root component can be found in fileapp.component.html.
• By default, this file already contains lots of example code.
We can remove all the code and replace it by<p>Hello Angular!</p>.
• As long asnpx ng serve is still running the web-server should rebuild the app im-
mediately.
• Hence, we will see the new output in the browser.
101

---

6 Single Page Applications and Angular
Creating new Components
Let’s create a new component.
• ThebestwaytocreateacomponentistousetheAngularCLI: npx ng generate component Test
• Or short: npx ng g c Test
This command creates a new directorysrc/app/test.
• It also generates four new files in that directory:test.component.ts (TypeScript
class),test.component.html (template),test.component.css (styles)and test.component.spec.ts
(tests).
The decorator of the component defines a default selectorapp-test.
• You can change that to another unique value.
• The HTML template of the new component also contains some default content
which is helpful to test the component:<p>test works!</p>.
Using the new Component
In order to use the new component we need to add it to the template of the root
component:
1 <p>Hello Angular!</p>
2 <app-test></app-test>
3 <app-test></app-test>
You also need to import the new component in the root component and add it to the
imports array of the decorator:
1 imports: [TestComponent],
Component Tree
Angular applications are build with components.
• Each of the use-cases or features are implemented by one or more components.
• With many features this will create atree of components .
In the next chapter we will learn what components can do for us.
102

---

6.5 Components
Figure 6.7: The output of two instances of the new component in the browser.
Figure 6.8: A tree of components in an Angular application. Image source:
https://angular.io/guide/router-tutorial-toh.
103

---

6 Single Page Applications and Angular
6.6 Angular and Bootstrap
Installing Bootstrap and Tailwind CSS
Bootstrap can be installed via npm and then included globally in the app.
• npm install bootstrap
We then include the Bootstrap CSS globally, e.g. inangular.json or styles.css:
1 @import "bootstrap/dist/css/bootstrap.min.css";
After that we can make use of Bootstrap in all HTML templates of our components.
Installing Tailwind CSS is even easier with the Angular CLI:
1 npx ng add tailwindcss
You can then use Tailwind CSS in the same way as Bootstrap.
6.7 Summary and Exercises
Summary
We learned today…
• why we need TypeScript for modern web development.
• the difference between traditional web apps and Single Page Applications.
• why Angular is used to build SPAs.
• how to create and run a new Angular application with the CLI.
• core Angular concepts, especially components and their role.
• how to use Bootstrap and Tailwind CSS in Angular applications.
104

---

6.7 Summary and Exercises
Exercises
Use the Angular CLI to create a new appT est.
• Build and run this app and navigate tohttp://localhost:4200.
• Create a new component using the CLI and add some HTML-code to its template.
• Use this component by adding its selector to the root component.
• Create another component and add its selector to the first new component.
105

---



---

7 Binding and Pipes
7.1 Property Binding
Data Binding
Last time we have seen that Angular provides means to create artificial HTML ele-
ments.
• Such new HTML elements are implemented as components.
• Basically the whole application is built using these components.
Their behavior is implemented in a TypeScript class.
• Their structure and presentation are defined in an HTML template and CSS.
The code of the component and its template need to interact with each other.
• We want to e.g. present data from the component in the template.
• Or we want to react on events coming from HTML-events in the template.
Both directions are covered byData Binding .
Property and Event Binding
One of the most important concepts of Angular isData Binding .
• Data Binding constitutes the glue between components and the DOM.
• Data Binding in Angular comes in two different flavors.
Property Binding: data flows from component → template (one-way down)
• Mostly, we use property binding to update the DOM of the component’s own
template.
• But, we can also use it to synchronize data in between multiple components.
Event Binding: events flow from template → component (upwards)
107

---

7 Binding and Pipes
• Those events may be raised by HTML elements in the component’s template again.
• Components can also define custom events that other components can subscribe
to.
Let’s see how we can use both methods of Data Binding.
Test component
Last time we created a new Angular component:TestComponent.
• Angular creates an instance of this component as soon as it detects its selector in
the template of any other component.
• So, we can use our test-component by adding its selector to the template of the
root-component: <app-test></app-test>
We can now extend this component by adding a property to the TypeScript class.
• The new property is publicly accessible, has the name title and is of typestring.
1 export class TestComponent {
2 public title:string = "Hello";
3 }
By means of Data Binding we can now bind the value of this property to HTML elements
in the template.
String interpolation
The easiest syntax for data binding is calledstring interpolation .
• Here, we can add an expression to our HTML template by using double-curly-
brackets.
• That expression may contain simple property access and basic operations.
As an example, we can add the following HTML-code to the template of our test-
component:
• <p>{{title}}</p>
If we havenpx ng serve running the app will be recompiled immediately.
• As the propertytitle holds the valueHello we see this message in the browser.
108

---

7.1 Property Binding
Figure 7.1: String interpolation: the title property value is displayed in the browser.
Change detection
One of the best features of property binding is to auto-detect changes.
• As soon as the component’s property changes its value Angular will update the
template with the new content.
To test this, we can add a constructor to our component.
• Here, we can change the property after some timeout:
1 export class TestComponent {
2 public title:string = "Hello";
3
4 constructor() {
5 setTimeout(() => { this.title = "Title changed!" }, 2000);
6 }
7 }
When the application reloads we first see the messageHello.
• After two seconds we will see the new title.
Property Binding
String interpolation is just a shorter syntax forproperty binding .
• In general, square brackets are used to assign an expression to an HTML-attribute.
• That expression can simply be the name of a property but may also contain a
calculation.
Examples:
• <span [innerHTML]="42 + 3"> → prints 45
• <img [src]="imageSource"> → use the component’s property imageSource as the
source to load the image from.
• <button [disabled]="condition ? true : false"> → disable the button dynamically
depending oncondition.
109

---

7 Binding and Pipes
Often string interpolation and property binding can achieve the same results:
• <span [innerHTML]="content"></span>
• <span>{{content}}</span>
Example
Similar to our last example we can dynamically change the background-color of a para-
graph.
• We add a new propertycolor to our component.
• We change that property from green to blue after two seconds.
1 export class TestComponent {
2 title:string = "Hallo";
3 color:string = "green";
4 constructor() {
5 setTimeout(() => {
6 this.title = "Title changed!";
7 this.color = "blue";
8 }, 2000);
9 }
10 }
Furthermore, we also adapt the template accordingly.
• This time we use the square-brackets-style to indicate binding.
1 <p [style.backgroundColor]="color">{{title}}</p>
Result
7.2 Signals
Signals (Modern Angular)
Angular traditionally uses automatic change detection.
• The framework checks the entire component tree for changes.
• This works well, but can become inefficient in large applications.
Modern Angular introducesSignals.
110

---

7.2 Signals
Figure 7.2: The paragraph with green background color.
Figure 7.3: The paragraph after the background color changes to blue.
111

---

7 Binding and Pipes
• Signals provide a more explicit and efficient way to handle state.
• Instead of checking everything, Angular updates only what actually changed.
Idea:
• A signal represents a reactive value.
• When the value changes, all dependent parts are updated automatically.
Signals: Basic Usage
We can define a signal in a component:
1 import { signal } from '@angular/core';
2
3 export class TestComponent {
4 title = signal("Hello");
5 }
Reading the value of the object is done by calling it as a function:
1 <p>{{ title() }}</p>
Updating the value is done by calling theset() method:
1 this.title.set("New value");
Signals vs. Classic Properties
Classic approach:
1 title: string = "Hello";
1 <p>{{ title }}</p>
Signal-based approach:
1 title = signal("Hello");
1 <p>{{ title() }}</p>
112

---

7.3 Event Binding
Key differences:
• Signals areexplicitly reactive .
• Updates arefine-grained (no full change detection cycle).
• Encourages a clearer data flow.
7.3 Event Binding
Event Binding
We use property binding and signals to update the DOM from our component.
• The opposite direction of property binding is calledEvent Binding .
• With event binding we can attach to events triggered by HTML elements and
invoke functions of the component.
In order to make use of event binding we use regular parenthesizes:
• (eventName)="expression"
• Here, eventName stands for the event to react to, e.g.click.
• Expression is a TypeScript expression that is executed whenever the event is raised.
As an example we attach theclick-event of a button to a methodonButtonClick of the
component: <button (click)="onButtonClick($event)">Hello</button>
• The optional parameter$event contains additional event information.
Example
Let’s react to changes of a text-box and display the content in a paragraph.
• We use a template reference variable (#input) to directly access the input
element.
• It creates a local reference to a DOM element in the template.
• It behaves like a variable pointing to that element, e.g.input.value.
• Usingtemplatereferencevariablesavoidsunsafecastslike $event.target asHTMLInputElement.
1 <p>{{title}}</p>
2 <input type="text" #input (input)="onInputChanged(input.value)">
113

---

7 Binding and Pipes
Figure 7.4: Event binding: the paragraph is updated as the user types into the text
box.
We create a new methodonInputChanged in our component.
• The method receives the value of the input directly as a typedstring parameter.
1 onInputChanged(value: string): void {
2 this.title = value.toUpperCase();
3 }
Change detection takes care to update the DOM wheneverthis.title changes.
Result
As a result the paragraph is updated as soon as we type something into our text-box.
7.4 Two Way Data Binding
Two way Data Binding
You can combine property binding and event binding toT wo W ay Data Binding.
• Two Way Data Binding means that changes are detected and processed on both
ends.
• Changing a component’s property updates an attribute of an HTML element.
• Likewise, changing the attribute of the HTML element updates the components’
property.
We can implement two-way data binding on our input-box:
114

---

7.5 Component Interaction
1 <input [value]="title" (input)="title=$event.target.value">
With thebanana-in-a-box-syntax we can express this even shorter.
1 <input [(ngModel)]="title">
Please be aware that two-way data binding is denoted as ananti pattern .
• Please refer here for reasons on that.
7.5 Component Interaction
Component interaction
So far, we used data binding to glue the template and the code of a single component.
• But, data binding in Angular also works between multiple different components.
We can use property binding to pass data from one component to another.
• We can implement custom events on components and bind to them from other
components with event binding.
In order to demonstrate this feature we first delete our current test-component.
• Angular CLI does not provide a dedicated delete command.
• So, we need to delete folderTest and remove all imports.
We then create two new components.
• npx ng generate component test1
• npx ng generate component test2
115

---

7 Binding and Pipes
Tree of components
Let’s make use of these two new components.
• First, we add the selector of test1 to the template of the root-component
• <app-test1></app-test1>
Then, we add the selector of test2 to the template of test1:
1 <p>Test1 works!</p>
2 <app-test2></app-test2>
We should now see the output of both components.
• As usual, we used the HTML-tags in a tree-like structure.
• By means of such component trees we can build our user-interfaces with Angular.
Components in such a structure may also interact with each other.
• Let’s see how we can use property and event binding in between components.
Titles
We now add a propertytitle to both components, assign individual values:
1 export class Test1Component {
2 title:string = "Test1 title";
3 }
1 <p>Test1 title={{title}}</p>
2 <app-test2></app-test2>
1 export class Test2Component {
2 title:string = "Test2 title";
3 }
1 <p>Test2 title={{title}}</p>
Each of the two components have now their individual title.
• These titles are both shown in the browser.
116

---

7.5 Component Interaction
Figure 7.5: Both components displaying their individual titles.
Input Decorator
We can now use property binding to pass the title oftest1 to test2.
• First, we decorate the title property of test2 with the@Input decorator.
• So, this property is open to be used by property binding from outside components.
• The classInput needs to be imported from@angular/core to be used.
1 export class Test2Component {
2 @Input() title:string = "Test2 title";
3 }
Now, we can use property binding in the template of test1:
1 <p>Test1 title={{title}}</p>
2 <app-test2 [title]="title"></app-test2>
The title of test2 is then bound to the title of test1.
• Thus, both components show the same title now.
Change detection
Property binding between different components also takes change detection into ac-
count.
• If the title of test1 changes this change if propagated to test2 as well.
• We can test this by updating the title of test1 after 2 seconds:
1 export class Test1Component {
2 title:string = "Test1 title";
3 constructor() {
4 setTimeout(() => { this.title = "Title changed!"; }, 2000);
5 }
6 }
After 2 seconds both components change their title.
117

---

7 Binding and Pipes
Figure 7.6: Both components after the changed title of test1 is propagated to test2.
EventEmitter
Property binding takes care to propagate the changed title of test1 to test2.
• The other direction is not covered.
• Changing the title in test2 does not have any influence on test1.
• Test1 does not know if test2 changes its title.
But, we can implement that by means of event binding.
• We can add an event to test2 to inform subscribers about a changed title.
• Then, they can react on that change accordingly.
In Angular an event can be implemented by means of anEventEmitter.
• That class belongs to the core functionality of Angular.
• By its means we can implement custom events on components or services (later
more).
Adding an event
An EventEmitter is a generic type encapsulating an additional argument of the event.
• As we want to pass the new title we use anEventEmitter of typestring.
Lets add an event to component test2:
1 import { Component, Input, Output, EventEmitter } from '@angular/core';
2
3 export class Test2Component {
4 @Input() title:string = "Test2 title";
5 @Output() titleChanged = new EventEmitter<string>();
6 }
Our event is supposed to be consumed from other components.
• Though, it has to be decorated by the@Output decorator.
118

---

7.5 Component Interaction
Figure 7.7: After 10 seconds both components show the title emitted by test2.
• Keep in mind to import all the required types (Output, EventEmitter) from
@angular/core.
Raise the event
An EventEmitter provides the methodemit().
• By calling this method we can inform all subscribers about the occurrence of the
event.
In the constructor of test2 we can now again use a timeout.
• After 10 seconds the title is changed and all subscribers get informed.
1 constructor() {
2 setTimeout(() => {
3 this.title = "Changed by test2!";
4 this.titleChanged.emit(this.title);
5 }, 10000);
6 }
Subscribe to the event
We can now use event binding to attach to this event.
• In the template of test1 we connect to the event of test2.
• We can use the exact same syntax of event binding as seen before.
1 <p>Test1 title={{title}}</p>
2 <app-test2 [title]="title" (titleChanged)="title=$event"></app-test2>
The variable$event contains this new value of the title coming from test2.
• We can directly change the title of test1 as a reaction of that event.
• After 10 seconds both components have the title of test2.
119

---

7 Binding and Pipes
Forwarding Events
An EventEmitter is also useful to forward an DOM-event coming from the template.
• Lets imagine we have a very important button in the template of a component.
• As soon as the button is clicked methodonClick() is called.
1 <button (click)="onClick($event)">Important Action</button>
With EventEmitters we can inform other components about the occurrence of this click-
event:
1 export class ImportantButtonComponent {
2 @Output() buttonClicked = new EventEmitter<string>();
3
4 OnClick() {
5 this.buttonClicked.emit("Button was clicked!");
6 }
7 }
Wherever you use this component you can attach to the click of the button:
1 <important-button-component (buttonClicked)="doWhatEverNecessary()"></important-button-component>
7.6 Pipes
Date
Properties of components may be of simple type likestring or more complex like aDate.
• Let’s add a propertybirthday of typeDate to test1:
1 export class Test1Component {
2 title:string = "Test1 title";
3 birthday:Date = new Date(1976, 8, 6);
4 }
With string interpolation we can print this date to a paragraph of the template:
• <p>Birthday: {{birthday}}</p>
Unfortunately, the default conversion of aDate to astring does not create a great result:
120

---

7.6 Pipes
Figure 7.8: The default Date-to-string conversion produces an unformatted result.
Figure 7.9: Built-in pipes for date formatting and text transformation.
Pipes
We often need to transform data from a property to a desired format, e.g. dates or
currencies.
• In Angular, the easiest way to implement such transformations arePipes.
• The concept of pipes is inspired by Unix pipelines.
Angular provides multiple built-in pipes for typical transformations:
1 <p>{{birthday | date:"dd.MM.yyyy"}}</p>
2 <p>{{title | uppercase}}</p>
3 <p>{{title | lowercase}}</p>
If needed, pipes as can be chained as well:
• <p>{{birthday | date | uppercase}}</p>
Custom pipes
We can easily implement own custom pipes as well.
• A pipe is basically a TypeScript class implementing interfacePipeTransform.
• The class has to be decorated with the@Pipe decorator defining the name of the
pipe.
Let’s create a new pipe which removes all vowels from a string.
• We create a TypeScript class VowelRemover and place it in a new directoryshared.
121

---

7 Binding and Pipes
Figure 7.10: The custom VowelRemover pipe applied to the title.
The interfacePipeTransform requires the existence of methodtransform.
• Here, the actual transformation takes place.
1 @Pipe({name: 'removevowel'})
2 export class VowelRemoverPipe implements PipeTransform {
3 transform(value: string): string {
4 return value.replace(/[aeiou]/gi, "_");
5 }
6 }
Using the VowelRemover
Before we can use the pipe we need to add it to theimports array of the component that
uses it (standalone components).
1 @Component({
2 selector: 'app-root',
3 imports: [VowelRemoverPipe],
4 ...
5 })
Then we can use our VowelRemover in the template of that component:
1 <p>{{title | removevowel }}</p>
7.7 Summary and Exercises
Summary
We learned today…
• The basics of Data Binding in Angular.
• What property and event binding does.
• How to use string interpolation.
122

---

7.7 Summary and Exercises
• How change detection works.
• What signals are and how they differ from classic properties.
• How components can interact with each other.
• How to use an EventEmitter to implement custom events of components.
• How to use built-in pipes and how to write custom pipes.
Exercises
Web-form
• Create a new component and add propertiesfirstname, lastname and email to it.
• Add text-boxes to the template showing the content of these properties.
• Add a button to the template and forward its click-event using an EventEmitter.
• Use event binding to print a message to the console in the root component.
Celsius to Fahrenheit
• Create a component in which a user can enter a temperature value into a text-box.
• Use event binding to listen for changes on this value.
• Implement a custom pipe to transform this value to Fahrenheit.
• Print this transformed value to the template.
123

---



---

8 Directives and Services
8.1 Component Lifecycle
Component Lifecycle
Components are the main building blocks of any Angular application.
• Each component goes through multiple different stages of alifecycle.
The lifecycle of a component starts when Angular renders it in the component tree.
• An instance is created when Angular encounters the component’s selector in a
template.
• The constructor is called and dependencies are injected.
After creation, Angular runs change detection continuously.
• It updates the DOM whenever component state changes.
At the end Angular destroys a component instance if it is not used any longer.
Lifecycle Hooks
Each stage of the component lifecycle can be accessed vialifecycle hooks .
• We can react to these hooks by implementing methods likengOnInit().
• Each of the interfaces defines the prototype of a method, e.g.ngOnDestroy().
• You can then add code to that method to react on a certain event.
One of the most important lifecycle hooks isngOnInit().
• It is raised once after Angular initialized data binding.
• It is good practice to usengOnInit() to perform custom initialization of the com-
ponent, e.g. loading data etc.
125

---

8 Directives and Services
Figure 8.1: Angular component lifecycle hooks. Image source:
https://geeksarray.com/blog/angular-component-lifecycle
8.2 EduWeb Example Application
SeminarManager
Learning more about Angular is easier while developing a real-world web-application.
• So, let’s assume we are web-developers, and we work for a companyEduW eb.
EduWeb organizesSeminars.
• Such Seminars have payingAttendees and are conducted by aT rainer.
So far, all data is managed in a large Excel sheet.
• Now, it is our task to create a new web-application.
• Employees of EduWeb shall be able to organize Seminars, Trainers and Attendees.
• As only employees should be able to access the data you need to authenticate the
users.
The new web-app is supposed to be implemented with Angular.
• We will use this example for the rest of this course to learn how to use Angular.
126

---

8.2 EduWeb Example Application
EduWeb Employee
List existing Persons
Create new Person
 Update Person
 Delete Person
 List existing Seminars
Create new Seminar
 Update Seminar
 Delete Seminar
Attach/ Detach Trainer
Attach/ Detach Attendee
Figure 8.2: Use cases of the SeminarManager application.
Person
Firstname
Lastname
Email
isAdm in
Password
S eminar
Name
Venue
Date
Trainer1
*
Attendees* *
Figure 8.3: Data model of the SeminarManager application.
Use-Cases
The new web-application needs to implement the following use-cases:
Certainly, there is a relationship between those use-cases and the Angular components
we need.
Data Model
The data model of the new web-application is not too complex.
• We only have two entities: Person and Seminar.
• Both Attendees and Trainers are Persons that have different roles regarding Sem-
inars.
• A Seminar knows exactly one Person who is the Trainer.
• A Seminar knows many Persons who are Attendees.
Pages
We will probably have at least two main pages in our web-app.
A page for Persons that show a list of Person-objects and allows the user to create a new
Person or delete/update an existing one.
127

---

8 Directives and Services
Figure 8.4: The person management page.
Figure 8.5: The seminar management page.
A page for Seminars that shows a list of Seminar-objects and allows the user to create
a new Seminar or delete/update an existing one.
New Angular App
First, we create a new empty Angular app by means of the CLI:
• npx ng new seminarmanager
Next, we install Bootstrap.
• We will use the Bootstrap CSS to create web-forms and navigation bars.
• We have seen how to do that in one of the last chapters.
To have a clean start we also remove all example code from the root component.
• Then, we can add our code to it later.
List of Persons
One of the use-cases was to list existing Persons.
• This use-case will be realized by its own component:PersonList.
• Hence, we create a new component:npx ng generate component PersonList
We can add the selector of the new component to the template of our root-component.
128

---

8.3 Data Model
• Then, we should see the test-output of our new component.
The task of our new component is to present a list of existing objects of type Person.
• So far, we do not have a data type that was able to represent a Person.
• Thus, we need to create a new class:Person.
Such a class belongs to theData Model of our application.
• Inside the app-directory, we can create a new foldermodel containing our model-
classes.
8.3 Data Model
Model Class
Now, we add a new filePerson.ts to the model directory.
• This file will contain the model-class Person.
Model classes are simple TypeScript classes representing application data.
• With TypeScript, we can define such properties easily by simply adding them to
the constructor.
In addition tofirstname, lastname and email we also add a propertyid.
• The id contains a unique value that helps us to identify a Person object later.
1 export class Person {
2 constructor(
3 public id:string,
4 public firstname:string,
5 public lastname:string,
6 public email:string) { }
7 }
129

---

8 Directives and Services
Using the Model Class
We can now use that model-class in our component PersonList.
• First, we need to import the class:import { Person } from '../model/person';
Then, we can define an array of some Person-objects as a property in our component.
• That property can then be used in our template with property binding.
Just for testing purposes, we add some elements to the array:
1 export class PersonListComponent{
2 objects:Person[] = [
3 new Person("1", "Alex", "Stuckenholz", "alexander.stuckenholz@hshl.de"),
4 new Person("2", "Max", "Mustermann", "max@hshl.de"),
5 new Person("3", "Kinga", "Karecki", "kinga@hshl.de")
6 ];
7 }
Binding to the view
We can now use string interpolation to show the first element of our array in a table.
1 <table class="table table-bordered">
2 <thead>
3 <tr>
4 <th scope="col">#</th>
5 <th scope="col">Firstname</th>
6 <th scope="col">Lastname</th>
7 <th scope="col">Email</th>
8 </tr>
9 </thead>
10 <tbody>
11 <tr>
12 <th scope="row">1</th>
13 <td>{{objects[0].firstname}}</td>
14 <td>{{objects[0].lastname}}</td>
15 <td>{{objects[0].email}}</td>
16 </tr>
17 </tbody>
18 </table>
130

---

8.4 Directives
Figure 8.6: Person list showing the first element using string interpolation.
8.4 Directives
Directives
Certainly, showing only the first element of the array is not what we want.
• Actually, we want to iterate over the elements of the array.
• Each of them should be printed in an own row of the table.
Fortunately, Angular provides so-calledDirectives.
• In general directives are able to enrich templates with some logic.
• Angular provides two main types of directives:
Structural Directives start with a * sign.
• These directives are used to change the DOM by adding or removing elements.
• Examples are*ngIf or *ngFor.
Attribute Directives are used to change the look and behavior of existing DOM-
elements.
• Examples arengClass or ngStyle.
ngFor
One example of a built-in structural directive isngFor.
• ngFor iterates over a list of objects and uses the element being attached to as a
template.
• It uses this template in each iteration to add elements to the DOM.
The following example iterates over a list of items to create<li>-elements in the DOM:
• <li *ngFor="let item of items">{{item}}</li>
The ngFor directive will detect changes on the underlying data as well.
131

---

8 Directives and Services
Figure 8.7: Person list showing all persons using thengFor directive.
• As soon as the underlying data changes the view will be updated automatically.
Note: New Angular versions introduce the@for syntax as an alternative.
Using ngFor
By using thengFor directive we can now present a list of Person objects to the user:
1 <tbody>
2 <tr *ngFor="let obj of objects">
3 <th scope="row">1</th>
4 <td>{{obj.firstname}}</td>
5 <td>{{obj.lastname}}</td>
6 <td>{{obj.email}}</td>
7 </tr>
8 </tbody>
Each element of the array is accessible as a single object in the loop.
• We can then use string interpolation to bind the values of the properties to the
cells of the table.
Row number
Unfortunately, the row index is not quite correct now.
• Each row shows 1 as the index.
Luckily,ngFor provides multiple local variables that can be aliased.
• Variableindex contains the index of the current item in the loop.
• Variablecount holds the amount of elements.
• Variablesfirst and last indicate, whether the element is the first or the last in the
loop.
132

---

8.4 Directives
• Variableeven and odd indicate if the element is an even or odd index.
So, we can use such a variable to bind the index to our template:
1 <tr *ngFor="let obj of objects; index as i">
2 <th scope="row">{{i+1}}</th>
3 <td>{{obj.firstname}}</td>
4 <td>{{obj.lastname}}</td>
5 <td>{{obj.email}}</td>
6 </tr>
Selectable Element
We want to be able to select one of the person in the table by clicking on it.
• We can use event-binding to attach to the click-event and call a methodonSelect().
• We can even pass the actual object of the current iteration to this function.
1 <tr *ngFor="let obj of objects; let i = index" (click)="onSelect(obj)">
2 <th scope="row">{{i+1}}</th>
3 <td>{{obj.firstname}}</td>
4 <td>{{obj.lastname}}</td>
5 <td>{{obj.email}}</td>
6 </tr>
Weaddaproperty selected oftype Person toourcomponent: selected: Person | null = null;
• By default, it is set tonull, but we set it to the clicked item in methodonSelect().
1 onSelect(obj:Person) {
2 this.selected = obj;
3 }
ngClass directive
Now, the propertyselected always holds the lastly clicked Person object.
• So far, we cannot see any difference in the user interface if an element is selected
though.
• But, we can useselected to highlight an item using thengClass directive.
In our case we want to assign the CSS-classtable-info to the <tr> element being se-
lected.
133

---

8 Directives and Services
Figure 8.8: Person list without a selected element.
Figure 8.9: Person list with the selected row highlighted using thengClass directive.
• That CSS class comes from Bootstrap and can be used to highlight a table row.
By means ofngClass we can do that dynamically in each iteration of thengFor loop.
• ngClass is and attribute directive and has the form:[ngClass]="expression"
• Here, the expression dynamically returns the CSS-class(es) to assign to this ele-
ment.
In our case we can use the following alternatives:
• [ngClass]="selected === obj ? 'table-info' : ''"
• [class.table-info]="selected === obj"
Result
ngIf
We want to be able to delete a selected Person object from the list.
• Hence, we add a button to the template of the componentPersonList.
• That button should only be visible if an element is actually selected.
To show an element only if a condition is met we can use the structural directivengIf.
134

---

8.5 Services
• We can apply this directive to our delete button.
1 <button class="btn btn-danger" *ngIf="selected !== null" (click)="onDelete()">Delete</button>
If the button is clicked we can useselected to actually delete the element.
• Then, change detection will detect the removal and thengFor loop will update the
table.
1 onDelete() {
2 let index = this.objects.findIndex(x => x.id == this.selected.id);
3 this.objects.splice(index, 1);
4 this.selected = null;
5 }
8.5 Services
Services
Currently, our objects of typePerson are managed inside our component in a public
property.
• From an architecture point of view this is not a good solution.
• A component should primarily be responsible for presenting data.
• A component should notbe responsible for the management of the data.
With Services Angular provides a different building block than components.
• We can create services whenever we need centralized functionality that is required
by e.g. components in our app.
• Services are again simple TypeScript classes that are saved in a directoryshared
usually.
The first service we need is to manage our Person objects.
• Suchaserviceshouldprovidemethodstoload, store, addanddeletePersonobjects.
• Hence, it adapts the repository pattern, see [1, p. 322].
135

---

8 Directives and Services
PersonService
Let’s create a new service to managePerson objects.
• WecanusetheCLItogenerateanemptyservice: npx ng generate service shared/Person
• As a result we have an empty service class in file shared/person.service.ts.
The class is decorated with the@Injectable decorator.
• This decorator allows Angular to inject the service where needed.
1 @Injectable({
2 providedIn: 'root'
3 })
4 export class PersonService {
5 constructor() { }
6 }
Event
We can now move some functionality to managePerson object from our PersonList-
Component to this new service.
• Our first version of the service will still hold the Person objects in an array.
• As all changes are discarded when the app restarts we will need a more sophisti-
cated version later.
To provide access to the data we implement two new methods.
• Method get() will return all Person objects.
• Method remove() will delete a specific Person object.
• As we will later need it anyway we implement them as asynchronous methods.
Furthermore, we add achanged observable to inform subscribers about changes.
• We use aSubject from RxJS — the Angular-recommended approach for service-
to-component communication.
• Using @Output() with EventEmitter is designed for component-to-component com-
munication, notfor services.
136

---

8.5 Services
PersonService
1 import { Injectable } from '@angular/core';
2 import { Subject } from 'rxjs';
3
4 @Injectable({
5 providedIn: 'root'
6 })
7 export class PersonService {
8 private changed = new Subject<void>(); // internal subject
9 public changed$ = this.changed.asObservable(); // public observable
10 objects: Person[] = [ ... ];
11
12 async getAll() {
13 return this.objects.slice();
14 }
15
16 remove(obj: Person) {
17 let index = this.objects.findIndex(x => x.id == obj.id);
18 this.objects.splice(index, 1);
19 this.changed.next(); // notify all subscribers
20 }
21 }
Using the Service
We can now use this service in ourPersonListComponent.
1 objects: Person[] = [];
2
3 constructor(private service: PersonService) {}
4
5 ngOnInit(): void {
6 this.service.getAll().then(data => {
7 this.objects = data;
8 });
9
10 this.service.changed$.subscribe(() => {
11 this.service.getAll().then(data => {
12 this.objects = data;
13 });
14 });
15 }
We load thePerson objects in thengOnInit() lifecycle hook.
• Furthermore, we subscribe to the service’schanged Subject to reload data when it
changes.
137

---

8 Directives and Services
8.6 Dependency Injection
Dependency Injection
Without dependency injection, each component would create its own service instance.
• This is not a good idea.
If we do that in more than one component we have multiple instances of the service.
• Thus, we then have different lists ofPerson objects.
Obviously, we only want one single instance of the service over the lifetime of our appli-
cation.
• Fortunately, Angular helps us by means ofDependency Injection .
With Dependency Injection Angular is able to manage the lifetime of services.
• If components (or other services) depend on a service Angular is able toinject
them automatically.
Constructor Injection
With standalone components andprovidedIn: 'root', Angular automatically creates a
single application-wide instance of each service.
• No manualproviders array in a module is needed.
• Angular’s dependency injector detects the constructor parameter type and injects
the correct instance.
We can now use that service in ourPersonList component.
• Instead of manually creating an instance we add thePersonService as a parameter
to the constructor.
• When Angular creates the instance of a component it now detects the dependency
and injects the single instance of the service.
1 constructor(private service:PersonService) { }
138

---

8.6 Dependency Injection
Figure 8.10: Two PersonList components before deletion.
Figure 8.11: Both lists updated after deletion, sharing the same service instance.
Result
Let’s add twoPersonList components to the template of the root component.
• Then, we will see two lists of Person objects.
Both PersonLists make use of the same instanceof thePersonService.
Though, deleting an object will change both lists automatically.
After that test we can remove one of thePersonList components again.
Dependency Injection with Injector
So far, we usedconstructor-based injection to access services.
• Then, Angular automatically injects the required services when it creates the com-
ponent instance.
Instead of using a constructor, we can use an injector to demand a service instance.
139

---

8 Directives and Services
• Theinjectorfunction inject() allowsaccessingserviceswithoutusingaconstructor,
e.g.:
• const service = inject(PersonService);
inject() accesses Angular’s dependency injection system directly.
• It can be used in any function that is called during the application initialization.
• e.g. in a component’s constructor or in a lifecycle hook.
This is especially useful for functional APIs, e.g.:
• route guards, interceptors or factory functions.
8.7 Logging
Logging
Logging is a key feature to be able to identify and fix errors.
• With our new knowledge about services we can create an according logging service.
• That service could not only print messages to the console.
• We can switch debug messages on or off and later also store errors in a RESTful
service.
Let’s start with creating a new service:npx ng generate service shared/logging
• To add the current date and time to our message we can use the built-inDatePipe
class.
1 export class LoggingService {
2 private is_debug_mode:boolean = true;
3 constructor(private datepipe: DatePipe) {}
4
5 debug(msg:any) {
6 if (!this.is_debug_mode)
7 return;
8
9 let curr_date = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
10 console.log(curr_date + " DEBUG: " + JSON.stringify(msg));
11 }
12 }
140

---

8.7 Logging
Figure 8.12: Debug messages printed to the browser console by the LoggingService.
Using Logging
With providedIn: 'root', Angular registers services automatically.
• No manual entry in a providers array is needed with standalone bootstrapping.
After that we can inject the service both into components and into other services.
• In thePersonService we can add some debug-messages.
1 constructor(private logger: LoggingService) { }
2
3 getAll() {
4 this.logger.debug("Loading all person objects");
5 return this.objects.slice();
6 }
Disabling Buttons
Showing the delete-button only if an element is selected flips the table up and down.
• As an alternative we can deactivate the button if no element is selected.
• Then, the button is still present but is not clickable if no element is selected.
We can use attribute binding on the attributedisabled and binding it to theselected
property.
• It is good design to implement a methodisSelected() in the component.
1 <button class="btn btn-danger"
2 [disabled]="!isSelected()"
3 (click)="onDelete()">Delete Person</button>
141

---

8 Directives and Services
Figure 8.13: The delete button is disabled when no element is selected.
8.8 Summary and Exercises
Summary
We learned today…
• about the lifecycle of components and how to use lifecycle hooks.
• about the requirements for our example application SeminarManager.
• how to implement a data model in Angular.
• how to use a model class in a component.
• what directives are and how to usengFor to iterate over elements in a template.
• how to make an element from that list selectable.
• how to usengClass to apply CSS-classes to elements dynamically.
• how to usengIf to show elements depending on conditions.
• what services are and how to create them.
• how to implement and use events on services.
• how to use dependency injection to manage dependencies of a component.
Exercises
Think about an own example project.
• What use-cases do you want to implement?
• What is the data-model of it?
• Create a new angular app for your project and add Bootstrap to it.
Pick a class from the data-model.
• Implement the model class and an according service.
142

---

8.8 Summary and Exercises
• The service is supposed to implement methodsgetAll() and aremove().
• The service shall provide an event to signal changes.
• Create a component to list elements in a table.
• Inject the service into the component to load the objects.
• Use directives to bind the data to the template of the list-component.
143

---



---

9 Routing
9.1 Seminars and Routing
Seminars
In the last chapter we started to implement certain use-cases regarding Person objects.
• We are already able to list persons and delete them.
But, the data-model of our application not only contains Persons.
• We also have Seminars that need to be managed.
So, we need to add a couple of new items to our application:
• A new model classSeminar with the propertiesname, venue and date.
• A new service in fileshared/seminar.service.ts managing seminar objects.
• A new componentSeminarList presenting a list of seminars to the user.
These new elements are quite equal to what we already created in regard to person
objects.
• If we want to see the result of our work we need to replace the tag<app-person-list>
in the root component template by the tag<app-seminar-list>.
Result
We can then work with seminar objects the same way as with person objects before.
145

---

9 Routing
Figure 9.1: The SeminarList component presenting a list of seminar objects.
9.2 Routing
Routing
Of course, we want to be able to navigate between these two list views.
• In classic web-applications these use-cases would be reachable via different URLs
on the server.
But, Angular is an SPA framework.
• All the views and activities are loaded in the initial request.
• Switching between views means to show and hide portions of the preloaded tem-
plates.
However, we can still use URLs with Angular.
• Angular listens to changes in the browser URL and updates the view accordingly.
• We can then definelocal URLs being mapped to app-specific views.
• In Angular, mapping URLs to different views is calledRouting.
Routes
To use routing in Angular we need to define aroutes configuration .
• Such a configuration is an array of objects of typeRoute.
• It is usually defined in a separate fileapp.routes.ts.
Each entry in the routes array defines a mapping between a URL and a component.
146

---

9.2 Routing
• The path property defines the URL to be matched.
• The component property defines the component to be used if the URL is matched.
In our case we want to be able to navigate to both lists of persons and seminars.
• So, we add according entries to the routes array.
1 const routes: Routes = [
2 { path: 'person', component: PersonListComponent },
3 { path: 'seminar', component: SeminarListComponent }
4 ];
Performance Considerations
In the previous example we directly referenced components in the routes.
• This requires importing all components inapp.routes.ts.
1 import { PersonListComponent } from './person/person-list.component';
2 import { SeminarListComponent } from './seminar/seminar-list.component';
As a result, all components are included in the initial bundle.
• Even if a route is never visited, its component is still loaded.
This can negatively affect performance for larger applications.
• The initial load time of the application increases because more code has to be
downloaded and parsed.
• Change detection and rendering can also be slower due to the larger bundle size.
Lazy Loading
Angular therefore supportslazy loading via loadComponent.
• Components are only loaded when the route is activated.
• This can significantly reduce the initial bundle size and improve load time, espe-
cially for larger applications with many routes and components.
147

---

9 Routing
1 const routes: Routes = [
2 {
3 path: 'person',
4 loadComponent: () =>
5 import('./person/person-list.component')
6 .then(m => m.PersonListComponent)
7 }
8 ];
This reduces the initial bundle size and improves load time.
• However, it can introduce a slight delay when navigating to the route for the first
time due to the need to fetch and load the component.
Enabling Routing
After we defined our routes’ configuration we need to enable routing in our application.
• With newer versions of Angular this is done in the fileapp.config.ts.
We need to import the functionprovideRouter from the@angular/router package and call
it with our routes’ configuration:
1 import { ApplicationConfig } from '@angular/core';
2 import { provideRouter } from '@angular/router';
3 import { routes } from './app.routes';
4
5 export const appConfig: ApplicationConfig = {
6 providers: [provideRouter(routes)]
7 };
9.3 Router Outlet
Router outlet
Unfortunately, this is not enough.
• Currently, the selector of thePersonListComponent is hard-coded into the tem-
plate of the root component.
But, instead of always showing the content of thePersonListComponent we now want
to see the content of whatever component we navigated to.
• So, we have to replace the component selector of<app-person-list> by the selector
of theRouterOutlet.
148

---

9.4 Redirects and routerLink
Figure 9.2: Blank browser window because the root path is not mapped to any
component.
Figure 9.3: Navigating to a mapped URL shows the according component.
The RouterOutlet acts as a placeholder for the output of the component according to the
current route.
1 <div class="container">
2 <router-outlet></router-outlet>
3 </div>
Result
After the app is recompiled we see a blank browser window.
No component is shown because the root path is not mapped to a route.
But, manually entering a mapped URL navigates to either of our components.
9.4 Redirects and routerLink
Redirect
We can extend the routes configuration so that one of the components is used by de-
fault.
• Thus, we can add aredirect to our routing configuration.
149

---

9 Routing
Figure 9.4: Navigation bar in collapsed view.
Figure 9.5: Navigation bar in expanded view.
We need to add another entry to our routes array:
1 const routes: Routes = [
2 { path: 'person', component: PersonListComponent },
3 { path: 'seminar', component: SeminarListComponent },
4 { path: '', redirectTo: 'person', pathMatch: 'full' }
5 ];
Now, the root path is redirected to our person-route.
• Hence, by default the list of person-objects is shown.
9.5 Navigation Bar
Navigation Bar
Manually entering the paths to navigate in between our components is not exactly
handy.
• So, we need some kind of menu to switch between paths.
With Bootstrap, we can easily create a responsive navigation bar.
• It is quite easy to apply the example from the Bootstrap documentation.
150

---

9.5 Navigation Bar
routerLink
With HTML, navigation links are created using<a href="...">.
• In Angular, regular hyperlinks should be avoided for internal navigation.
• Clicking such a link creates an HTTP request.
• This causes our application to reload which also resets its internal state.
The routerLink directive provides an alternative to thehref-attribute.
• It updates the client-side URL without triggering a full page reload.
• Such links will be processed by Angular instead of creating a request.
Thus, we adapt the links in the navigation bar by using therouterLink directive:
• <a routerLink="/person">People</a>
• We can then use the navigation bar to easily switch between the two list compo-
nents.
routerLinkActive
There is one more improvement for our navigation bar.
• The navigation bar should visualize which of the two routes are currently active.
Fortunately, Angular provides another directive:routerLinkActive.
• The routerLinkActive directive toggles CSS-classes for active RouterLink binding.
• In our case, we can add the bootstrap-class “active” to the links in the navigation
bar to highlight the current section.
1 <ul class="navbar-nav">
2 <li class="nav-item" routerLinkActive="active">
3 <a class="nav-link" routerLink="/person">Persons</a>
4 </li>
5 <li class="nav-item" routerLinkActive="active">
6 <a class="nav-link" routerLink="/seminar">Seminars</a>
7 </li>
8 </ul>
151

---

9 Routing
More Components
Although we made some good progress we still miss some use cases in our application.
• We need e.g. a possibility to add and edit both person and seminar objects.
These use-cases will be covered by some more components.
• So, we use the Angular CLI to generate new components again:
• npx ng generate component Person/PersonEdit
• npx ng generate component Seminar/SeminarEdit
Later, these two new components are supposed to present web-forms to the user.
• They are used to add a newPerson or Seminar object to the list or edit an existing
object.
Of course, we want to navigate to those web-forms with routing as well.
• When navigating to the component, we then have to pass the object to be edited.
• In fact, we can use theid of the object as a parameter in the URL.
Route parameters
The routing API of Angular is able to match and extract parameters as parts of routes.
• Such parameters are identified by the colon, e.g.:id.
To be able to navigate to the two new components two routes are added to the configu-
ration:
1 const appRoutes: Routes = [
2 { path: 'person', component: PersonListComponent },
3 { path: 'person/:id', component: PersonEditComponent },
4 { path: 'seminar', component: SeminarListComponent },
5 { path: 'seminar/:id', component: SeminarEditComponent },
6 { path: '', redirectTo: 'person', pathMatch: 'full' }
7 ];
If we navigate to e.g./person/12 the PersonEditComponent is used to generate the
output.
• Angular treats the value 12 as the value of the parameterid.
152

---

9.5 Navigation Bar
Figure 9.6: The PersonEditComponent displaying the route parameterid from the
URL.
Router
Inside thePersonEditComponent we need to be able to access the route parameterid.
• The routing API of Angular provides the classActivatedRoute to do exactly that.
• We can get an object of that type injected into the constructor of a component.
• It is then best practice to read the route parameters in thengOnInit() lifecycle
hook.
1 export class PersonEditComponent implements OnInit {
2 private id: string | null;
3
4 constructor(private route:ActivatedRoute) { }
5
6 async ngOnInit() {
7 this.id = this.route.snapshot.paramMap.get('id');
8 }
9 }
We can use string interpolation to print theid in the template:
1 <p>Editing person with ID: {{id}}</p>
Result
We can now manually navigate to e.g./person/12.
• Routing takes care to invoke thePersonEditComponent.
• So far, we only see the output of theid of the object to edit.
153

---

9 Routing
Loading a single Object
In thePersonEditComponent we now have theid of the Person object we want to edit
later.
• It is now a good idea to add another method to thePersonService.
• It has to deliver the single object with a givenid.
1 async get(id:string) {
2 let index = this.objects.findIndex(x => x.id == id);
3
4 if (index != -1) {
5 return this.objects[index];
6 } else {
7 throw new Error("Object with that ID not found!");
8 }
9 }
Now, we get thePersonService injected into the constructor of thePersonEditCompo-
nent.
• In thengOnInit() lifecycle hook we can then load the Person object using theid
from the route.
Loading a single Object
The id 0 is used as an indicator that we want to create a newPerson object to be
added.
1 async ngOnInit(): void {
2 this.id = this.route.snapshot.paramMap.get('id');
3
4 if (this.id && this.id !== "0") {
5 this.obj = await this.service.get(this.id);
6 } else {
7 this.obj = new Person("0", "", "", "");
8 }
9 }
In the template we can now print the content of the object.
• We can use theJsonPipe to print the object as a JSON-string.
1 <h1>Editing Person</h1>
2 <p>{{obj | json}}</p>
154

---

9.5 Navigation Bar
Figure 9.7: The PersonEditComponent displaying the loaded person object as JSON.
Figure 9.8: The edit button added to the PersonListComponent.
Result
Now, using theid parameter from the URL we can successfully load the object to be
edited.
• If we want to create a new object we simply pass 0 as the id.
Edit-Button
Manually navigating to thePersonEditComponent is not very user-friendly.
• So, we add another button to the templates of both list components.
That new edit-button is as well enabled only if an element is selected in the list.
• Clicking the button calls a methodonEdit() on the components code.
1 <button class="btn btn-success"
2 [disabled]="!isSelected()"
3 (click)="onEdit()">Edit Person</button>
Router
In methodonEdit() of PersonListComponent we now need to forward to thePersonEd-
itComponent.
• We can do that by navigating to the according URL.
155

---

9 Routing
• e.g. /person/1 if the person withid 1 is currently selected.
To programmatically navigate to another URL we can use an object of typeRouter.
• If needed, we get an object of that type injected into the constructor of our com-
ponent.
1 constructor(
2 ...
3 private router:Router) { }
We can then use this object to navigate to the according URL.
1 onEdit() {
2 this.router.navigate(['/person', this.selected.id]);
3 }
Wildcard Routes
We now have multiple different routes being mapped to components.
• If we manually navigate to a route that is not defined we see a blank window.
• It would be better to show an error message then.
To do that we create a new componentPageNotFoundComponent
• npx ng generate component PageNotFound
We then extend our route-configuration by awildcard route .
1 const routes: Routes = [
2 ...
3 { path: '**', component: PageNotFoundComponent }
4 ];
Such a wildcard route is the last entry in our configuration.
• The according component is invoked if no other route matches the URL.
156

---

9.6 Summary and Exercises
Figure 9.9: The PageNotFoundComponent showing a 404 error message.
Error Message
We can now add some error-message to the template of thePageNotFoundComponent.
1 <h1>404</h1>
2 <p>Sorry, but the page you were looking for was not found!</p>
Navigation to any false URL in our application now shows this error-message:
9.6 Summary and Exercises
Summary
Today we learned…
• how to use routing and local URLs in order to navigate from one view to another.
• how to create a routes configuration to map a URL to a component.
• what a router outlet is.
• how to configure redirects.
• why we need therouterLink-attribute instead of thehref-attribute on hyperlinks.
• how to define and access route parameters.
• how to programmatically navigate to routes.
157

---

9 Routing
Exercises
Continue to work on your example project!
• Implement a second use-case from your requirements.
• Add routing to your application.
• Programmatically navigate to one of the components, e.g. by clicking a button.
158

---

10 Authentication and Authorization
10.1 Authentication and Authorization
Authentication and Authorization
So far, we do not protect our application from unauthorized access.
• If we deploy the app to a public server, everybody could access and manipulate
the data.
• This is of course not a good idea.
We only want the employees of our company to be able to work with the application.
• So, we need to add mechanisms forAuthentication and Authorization to our
app.
Authentication answers: Who is the user?
• Usually, this is done by a username and a password.
Authorization answers: What is the user allowed to do?
• We need to enforce certain rights so that the user may use functionality of the app.
10.2 Route Guards
Route Guard
Let’s start with authorization.
• We need to be able to protect parts of our application from unauthorized access.
In Angular, we can do that by means ofRoute Guards .
• Route guards are functions that decide whether navigation is allowed or not.
• Guards are executed before route activation and can prevent access to certain
routes.
159

---

10 Authentication and Authorization
Inearlier versions, route guardswereimplementedasclasses implementing CanActivate.
• Since Angular 14, functional guards are preferred.
• Basically, this is a function that returnstrue if a user is allowed to navigate to a
route.
• If not, the function should return aUrlT reeto redirect the user to another route.
Creating a Route Guard
The best place to define a Route Guard is in theapp.routes.ts file.
• We use the pre-defined signatureCanActivateFn to create a new route guard:
1 const authGuard: CanActivateFn = () => {
2 return true;
3 };
Now, we can use this route guard.
• We need to add it to the routes’ configuration.
• Each route can have one or more route guards assigned to it.
1 const routes: Routes = [
2 {
3 path: 'person', component: PersonListComponent, canActivate: [authGuard]
4 },
5 ...
6 ];
10.3 AuthService
AuthService
The task of a route guard is to enforcethe user rights.
• The route guard cannot manage the rights of a user.
We need another service to do that:AuthService
• That service acts as a central instance to our app to manage the rights of a user.
• It provides methods to log in and log out a user and to check if a user is logged in
or not.
160

---

10.3 AuthService
We create that service using the CLI again:
• ng generate shared/AuthService
Creating an AuthService
As a first step we want to use theAuthService to check if a user is logged-in.
• So, we need to implement according methods in theAuthService.
A first version might look like this:
1 export class AuthService {
2 private is_logged_in:boolean = false;
3
4 isLoggedIn(): boolean {
5 return this.is_logged_in;
6 }
7 }
Later, we will enhance this service with more methods, e.g.:
• login with credentials to a remote backend,
• logout and clear the current user.
Using AuthService in Route Guard
We can now use this service in the route guard to check if a user is logged-in or not:
1 const authGuard: CanActivateFn = () => {
2 const service = inject(AuthService);
3 return service.isLoggedIn()
4 ? true
5 : router.parseUrl('/login');
6 };
Here, we use theinject() function to get an instance of theAuthService.
• If the user is logged-in, we returntrue to allow access to the route.
Otherwise, we return an object of type UrlTree to forward the user to theLoginCompo-
nent.
• The authGuard then uses the UrlTree to redirect the user to/login.
161

---

10 Authentication and Authorization
Figure 10.1: The LoginComponent displayed when navigating to a protected route
without being logged in.
LoginComponent
Authorization is now fully implemented (kind of).
• We can successfully prevent anonymous users from accessing protected routes.
• We now need a way to identify a user by e.g. his email-address and a password.
To do that, we already forward anonymous users to/login.
• Currently, ourPageNotFoundComponent jumps in when we navigate to that URL.
• But, we can create a new component:npx ng generate component auth/login
• This newLoginComponent is supposed to show a login-form to the user.
We also add an according route to the routes configuration.
• Of course, its path should not be protected by the route guard.
1 const routes: Routes = [ ... { path: 'login', component: LoginComponent }, ... ];
Result
Now, to whatever URL we try to navigate to we will get forwarded to theLoginCompo-
nent.
To ask for an email-address and a password we need to create an according web-form.
• So, we add some HTML-code to the template of theLoginComponent.
162

---

10.3 AuthService
Figure 10.2: The login form with email and password input fields.
Login Form
1 <form>
2 <div class="mb-3">
3 <label class="form-label" for="email">Email</label>
4 <input type="email" class="form-control" id="email" placeholder="Enter email">
5 </div>
6 <div class="mb-3">
7 <label class="form-label" for="password">Password</label>
8 <input type="password" class="form-control" id="password" placeholder="Password">
9 </div>
10 <button type="button" class="btn btn-primary" (click)="onSubmit()">Login</button>
11 </form>
Submit Button
Keep in mind not to usea submit-button in that login-form.
• Clicking such a button creates a HTTP request sending the form-data to the server.
• This reloads our app in the browser which is not what we want.
Instead, we use a regular button and attach to the click-event.
• If the button is clicked, we call a methodonSubmit() on the component.
• <button type="button" (click)="onSubmit()">Login</button>
In methodonSubmit() we then need a way to access the form-data from the template.
• There are multiple ways to work with forms in Angular.
The easiest way to handover data from the template to a method in the component is
to usetemplate variables .
163

---

10 Authentication and Authorization
10.4 Template Variables
Template Variables
A template variable acts as a reference to an element in the template.
• That reference can then be used somewhere else in that template.
• We can e.g. use template variables to pass data to a method in the component.
To declare a template variable the hash-symbol # is used.
• In the login-form we need to define two template variables,#email and #password.
• One on each input-element.
1 <input type="email" class="form-control" id="email" placeholder="Enter email" #email>
2 <input type="password" class="form-control" id="password" placeholder="Password" #password>
Then, we can use these variables to pass the values of the input-fields to our method
onSubmit():
1 <button type="button" (click)="onSubmit(email.value, password.value)">Login</button>
Authorization
We can now enhance ourAuthService.
• We add an asynchronous methodlogin() to ourAuthService.
• Here, we can check the credentials of a user.
• For now, we add a very simple hard-coded check here.
1 async login(email:string, password:string):Promise<boolean> {
2 if (email === 'alexander.stuckenholz@hshl.de' && password === 'test') {
3 this.is_logged_in = true;
4 return true;
5 } else {
6 return false;
7 }
8 }
W arning: Do not use hard-coded credentials in a real application!
164

---

10.4 Template Variables
Logging in
We can now use this functionality inLoginComponent.
• We need to inject theAuthService into the constructor of theLoginComponent to
be able to use it.
1 constructor(
2 private auth:AuthService,
3 private router:Router) { }
Now, we can finally use methodlogin() to check these credentials:
1 async onSubmit(email:string, password:string) {
2 const result = await this.auth.login(email, password);
3 if (result) {
4 this.router.navigate(['/person']);
5 } else {
6 this.login_error = true;
7 }
8 }
Error Message
If theAuthService was not successful in validating the credentials it returnsfalse.
• We then set a flaglogin_error to display an error in the template.
1 <div class="alert alert-danger" role="alert" *ngIf="login_error">
2 A user with that email or password was not found!
3 </div>
We can now successfully authenticate a specific user and prevent others from using our
app.
• But, we should also be able to logout from the app.
• So, we first create a methodlogout() on ourAuthService.
• It simply sets the flagis_logged_in to false.
1 async logout() {
2 this.is_logged_in = false;
3 }
165

---

10 Authentication and Authorization
Logging out
We can then create a newLogoutComponent: npx ng generate component auth/Logout
• By adding the new component to the routing configuration we can logout by nav-
igating to/logout.
In the constructor of theLogoutComponent we can use theAuthService to logout.
• By subscribing to the changed event of theAuthService we can forward to the
LoginComponent, if logging out was successful.
1 constructor(
2 private auth:AuthService,
3 private router:Router) {
4 auth.logout().then(() => {
5 this.router.navigate(['/login']);
6 });
7 }
Navbar
With /login and /logout we have two new paths we can navigate to.
• It would be great to also reflect our login-state in the navigation bar at the top.
If a user is not logged-inwe want the navbar to contain a login-link there.
• If a user is logged-inwe want to see a logout-link.
We can inject theAuthService into the navbar component.
• Then, we can use methodisLoggedIn() to check the login-state of the user.
• Then, we can use that information to dynamically change the navbar.
1 <ul class="navbar-nav me-auto mt-2 mt-lg-0">
2 <li class="nav-item">
3 <a class="nav-link" routerLink="login" *ngIf="!auth.isLoggedIn()">Login</a>
4 <a class="nav-link" routerLink="logout" *ngIf="auth.isLoggedIn()">Logout</a>
5 </li>
6 </ul>
166

---

10.5 ViewChild
Figure 10.3: Navigation bar showing the login link when no user is logged in.
Figure 10.4: Navigation bar showing the logout link when a user is logged in.
Result
As a result we now toggle between links to log in or logout depending on the current
state.
10.5 ViewChild
ViewChild
One of the key functions in regular JavaScript is to access and manipulate the DOM.
• We have seen that we can get elements from the DOM using the objectdocument.
• let domReference = document.getElementById("someElement");
In Angular we can do something similar.
• A component can obtain a reference to a DOM element or directive to access it
directly.
• To get one single reference we use the classViewChild.
• To create a list of references to multiple elements we use classViewChildren.
Mostly, template variables are used to identify the DOM element to create a reference
for.
167

---

10 Authentication and Authorization
• Letssaywehaveacertainelementinourtemplate: <div #someElement>Sample Code</div>
• We can then create a reference like this:@ViewChild("someElement") domReference;
• Wecannowreadandwritepropertiesofthatelementinthecodeofourcomponent.
Using the ViewChild
In our LoginComponent we can create such references to our input-fields.
• The decorator gets the name of a template variable as parameter.
1 @ViewChild('email') emailElement:ElementRef;
2 @ViewChild('password') passwordElement:ElementRef;
We can now change our methodonSubmit() in theLoginComponent.
• Instead of passing email and password from the template to the method we can
use the references to the DOM elements to read their values.
1 onSubmit() {
2 let email = this.emailElement.nativeElement.value;
3 let password = this.passwordElement.nativeElement.value;
4 // login
5 }
viewChild Signal (Angular 17+)
Since Angular 17, Signals provide a reactive, type-safe alternative to the@ViewChild
decorator.
• The viewChild() function returns aSignal instead of a decorated property.
• Signals integrate with Angular’s change detection more efficiently.
• No ElementRef import needed for simple value access.
Decorator approach (classic):
1 @ViewChild('email') emailEl: ElementRef;
2
3 onSubmit() {
4 const val =
5 this.emailEl.nativeElement.value;
6 }
Signal approach (Angular 17+):
168

---

10.6 Summary and Exercises
1 emailEl = viewChild<ElementRef>('email');
2
3 onSubmit() {
4 const val =
5 this.emailEl()?.nativeElement.value;
6 }
The signal value is read by calling it as a function:this.emailEl().
• Prefer theviewChild signal for new code;@ViewChild is still valid.
10.6 Summary and Exercises
Summary
Today we learned…
• how to protect routes with route guards.
• how to create anAuthService to manage the rights of a user.
• how to use template variables and theViewChild decorator.
Exercises
Questions
• What is a route guard and which methods does it support?
• What is the purpose of template variables and theViewChild decorator?
Continue to work on your example project!
• Protect routes with a route guard.
• Create anAuthService and use it in the route guard.
• Implement aLoginComponent and ask for credentials.
• Connect theLoginComponent to theAuthService.
169

---



---

11 Reactive Forms
11.1 Reactive Forms
Forms in Angular
In the last chapter we implemented a login-form to authenticate users by email and
password.
• We used template variables and theViewChild decorator to read the values from
the form.
• Usually, we want to handle more than just a few input fields.
• Mostly, we have much more complex forms.
Angular provides two different approaches to work with forms.
• Both approaches use an object-oriented form model to capture and validate user
input.
With Reactive F ormsa form model is created explicitly in the code of a component.
• This approach is very robust and scales to very complex use-cases.
T emplate-driven forms are built using directives in the template.
• Usually, that approach is applied to more simple use-cases.
As reactive forms are mostly the better choice we will only have a look at that ap-
proach.
171

---

11 Reactive Forms
Figure 11.1: The PersonEditComponent showing the edit form without data loaded.
PersonEdit
Before we can use either of the approaches we need a web-form in a template.
• So, let’s add a form to editPerson objects to the template of thePersonEditCom-
ponent.
1 <form>
2 <div class="mb-3">
3 <label for="firstname">Firstname:</label>
4 <input type="text" class="form-control" id="firstname">
5 </div>
6 <div class="mb-3">
7 <label for="lastname">Lastname:</label>
8 <input type="text" class="form-control" id="lastname">
9 </div>
10 <div class="mb-3">
11 <label for="email">E-Mail:</label>
12 <input type="text" class="form-control" id="email">
13 </div>
14 </form>
Result
Clicking on the edit-button in thePersonListComponent we now see the new form.
• The input fields do not contain the data of the selected object.
• Furthermore, there are no buttons to confirm or cancel changes.
172

---

11.1 Reactive Forms
Reactive Forms
Let’s make use of reactive forms by explicitly creating a form model in thePersonEdit-
Component.
• Beforewecanusethecorrespondingclassesweneedtoimportthe ReactiveFormsModule
in the component.
1 imports: [ReactiveFormsModule]
Then, we can add a new property of typeFormGroup to ourPersonEditComponent.
• An object of that type represents a single HTML-form in the view.
• It tracks the status and changes for each of the controls that are part of the form.
Creating the Form
The object of typeFormGroup is the container for all inputs in the web-form.
• With firstname, lastname and email we have three input-elements.
• So, we add three objects of typeFormControl to ourFormGroup programmatically.
1 this.form = new FormGroup({
2 firstname: new FormControl(),
3 lastname: new FormControl(),
4 email: new FormControl()
5 });
Now, we need to associate the form model with controls in the template.
• First, we assign the form model to our HTML-form in the template by using the
formGroup directive: <form [formGroup]="form">
• Then, we assign each input field to aFormControl object of the model:
• <input type="text" formControlName="firstname">
173

---

11 Reactive Forms
FormBuilder — A Cleaner Alternative
Manually constructing aFormGroup with new FormControl() can become verbose.
• The F ormBuilderservice provides a concise syntax for creating form models.
• Inject FormBuilder into the component constructor.
Creating the same form withFormBuilder:
1 import { FormBuilder, Validators } from '@angular/forms';
2
3 export class PersonEditComponent {
4 form = this.fb.group({
5 firstname: ['', [Validators.required, Validators.minLength(3)]],
6 lastname: ['', [Validators.required, Validators.minLength(3)]],
7 email: ['', [Validators.required, Validators.email]]
8 });
9
10 constructor(private fb: FormBuilder) {}
11 }
The result is identical to the manual approach but far more readable.
Typed Forms (Angular 14+)
Since Angular 14, reactive forms arefully typed .
• TypeScript infers types from the initial values, improving type safety and IDE
support.
Typed forms withFormBuilder look like this:
1 import { FormBuilder, Validators } from '@angular/forms';
2
3 export class PersonEditComponent {
4 form = this.fb.nonNullable.group({
5 firstname: ['', [Validators.required]],
6 lastname: ['', [Validators.required]],
7 email: ['', [Validators.email]]
8 });
9
10 constructor(private fb: FormBuilder) {}
11 }
Using nonNullable ensures that form controls cannot be null, further enhancing type
safety.
174

---

11.1 Reactive Forms
Figure 11.2: The form model reflecting the entered values as JSON using the JsonPipe.
Testing the Form Model
We can test this form model by displaying its content using string interpolation and the
JsonPipe.
1 <form [formGroup]="form">
2 <div class="mb-3">
3 <label for="firstname">Firstname:</label>
4 <input type="text" class="form-control" id="firstname" formControlName="firstname">
5 </div>
6 <div class="mb-3">
7 <label for="lastname">Lastname:</label>
8 <input type="text" class="form-control" id="lastname" formControlName="lastname">
9 </div>
10 <div class="mb-3">
11 <label for="email">E-Mail:</label>
12 <input type="text" class="form-control" id="email" formControlName="email">
13 </div>
14 </form>
15
16 <pre>{{form.value | json}}</pre>
Result
As soon as we enter something in the form we will see that the form model changes as
well.
Loading Data
The original purpose of the form was to edit an existing object.
• We already loaded the according object by itsid before.
175

---

11 Reactive Forms
Now, we need to load the values of the Person object into the form.
• A good place to do that is thengOnInit lifecycle hook of thePersonEditComponent.
• We can use methodssetValue() or patchValue() on the form model.
1 this.form.setValue({
2 firstname: this.obj.firstname,
3 lastname: this.obj.lastname,
4 email: this.obj.email
5 });
After that, we see all the data being present in the input fields when we select an existing
Person object to edit.
Submitting Data
We now need two buttons in the web-form of thePersonEditComponent.
• One button to submit the changes and one to cancel them.
We add according form-elements to the HTML view.
• The cancel-button invokes a method onCancel() in the component.
1 <button type="submit" class="btn btn-primary">Ok</button>
2 <button type="button" class="btn btn-success" (click)="onCancel()">Cancel</button>
Submitting a form from a regular web page means to create a request to a server.
• Again, with Angular we do not want that to happen as this reloads the app.
• But, we can attach to thengSubmit event of the form.
If the form is submitted by the ok-button methodonSubmit() is called.
1 <form [formGroup]="form" (ngSubmit)="onSubmit()">
176

---

11.1 Reactive Forms
Saving Changes
So far, ourPersonService has no means to save changes or add new objects.
• So, we need to add a new method save() to ourPersonService.
When saving an object we need to distinguish between new and existing objects.
• An existing object already has a uniqueid and needs to be replaced in the list.
• A new object has no uniqueid but needs one before being added to the list.
1 save(obj:Person) {
2 const index = this.objects.findIndex(x => x.id === obj.id);
3
4 if (index >= 0) {
5 this.objects[index] = obj;
6 } else {
7 const newId = Math.max.apply(null, this.objects.map(o => Number(o.id))) + 1;
8 obj.id = String(newId);
9 this.objects.push(obj);
10 }
11
12 this.changed.emit(this.getAll());
13 }
onSubmit and onCancel
As a last step, we implement methodsonSubmit() and onCancel() in PersonEditCom-
ponent.
• In onSubmit() we use the form model to read the data from the form.
• We then use ourPersonService to store the changed data.
1 onSubmit() {
2 if (this.form.invalid) return;
3 const value = this.form.getRawValue();
4 this.obj.firstname = value.firstname;
5 this.obj.lastname = value.lastname;
6 this.obj.email = value.email;
7 this.service.save(this.obj);
8 this.router.navigate(['person']);
9 }
In onCancel() we simply navigate back to ourPersonList.
177

---

11 Reactive Forms
1 onCancel() {
2 this.router.navigate(["person"]);
3 }
11.2 Validators
Validators
We are now able to edit existing person objects.
• But, we do not prevent users to enter bad data, e.g. a missing lastname or a bad
email-address.
Hence, we need to validate the data in the form and show error messages if needed.
• Our form-model helps with all these tasks.
As part of the form-model we can add multiplevalidators to each of theFormControls
or to theFormGroup for comprehensive validation rules.
• There are plenty of predefined validators, e.g.required, email, minLength, …
1 this.form = new FormGroup({
2 firstname: new FormControl("", [Validators.required, Validators.minLength(3)]),
3 lastname: new FormControl("", [Validators.required, Validators.minLength(3)]),
4 email: new FormControl("", [Validators.required, Validators.email])
5 });
Checking Form State
We now added some validation rules to our form model.
• But, if the user breaks these rules Angular does not automatically prevent invalid
data from being submitted.
• The validation status has to be checked manually.
The FormGroup and allcontaining FormControls provide multiple flags reflecting vali-
dation.
• The flagsdirty and pristine reflect whether the data was changed by the user.
• The flags touched and untouched indicate if the user ever focused on an input
element.
178

---

11.2 Validators
• The flagsvalid and invalid show the result of the validators.
We can access those states in the template to e.g. disable the submit-button:
1 <button type="submit" class="btn btn-primary" [disabled]="form.invalid">Ok</button>
Or you can use those states in the code to prevent saving bad data:
1 if (this.form.invalid)
2 return;
Control status CSS classes
We can now easily prevent a user to save error-prone data.
• But, we should also reflect validation errors in the view.
• There are multiple ways to do that.
According to the validation states Angular defines some CSS-classes.
• Examples are.ng-valid, .ng-pending, .ng-dirty etc.
These classes are assigned to the form controls depending to their validation state.
• So, an invalid form control automatically has CSS-class.ng-invalid assigned.
• The stylesheet of the component can then be used to define the visual appearance
of those classes.
1 .ng-invalid {
2 border: 1px solid red;
3 }
Visualize Errors
We can also use the CSS-classes of Bootstrap to reflect validation errors.
• Using the ngClass directive we can dynamically assignis-valid or is-invalid to a
control depending on its validation state.
• According input-fields are then marked with a red or green border.
179

---

11 Reactive Forms
Figure 11.3: Input fields marked with Bootstrap validation classes to visualize form
errors.
1 <input type="text" class="form-control" id="firstname" formControlName="firstname"
2 [ngClass]="{
3 'is-invalid': form.controls.firstname.invalid && form.controls.firstname.dirty,
4 'is-valid': form.controls.firstname.valid && form.controls.firstname.dirty}">
Another way to visualize the validation state is to add an error message directly below
the related input element.
• We can do that using thengIf directive:
1 <span class="text-danger" *ngIf="form.controls.email.touched && form.controls.email.invalid">
2 Please enter a valid e-mail address.
3 </span>
Result
Using the Bootstrap classes the input fields are marked with a red or green border:
Adding new Person Objects
As we can now successfully edit existingPerson objects, we also want to create new
ones.
• We only need to navigate to/person/0 in order to create a new object.
• Of course, we don’t want to do that manually.
We add another button to the template of thePersonListComponent.
180

---

11.2 Validators
• <button class="btn btn-primary" (click)="onAdd()">Add Person</button>
• Clicking that button we call a methodonAdd().
In onAdd() we simply navigate to thePersonEditComponent to create an new object.
1 onAdd() {
2 this.router.navigate(['/person/0']);
3 }
SeminarEditComponent
We now implemented a good part of the use-cases of the SeminarManager.
• The results of the last steps are, that we can create, edit and deletePerson objects.
We can repeat those steps on ourSeminarEditComponent almost 1:1.
• We first use the route parameter to load an existingSeminar object or create a
new one.
• We then add a web-form to the template to edit aSeminar object.
• After that we create a form model including validators and add it to the compo-
nents code.
• We add missing methods to theSeminarService to store objects.
Result
After that, we can create, edit and deleteSeminar objects as well.
Trainer and Attendees
Unfortunately, this is not sufficient.
• The data-model contains more than only flat properties on two classes.
• A Seminar knows exactly onePerson who is theTrainer of theSeminar.
• A Seminar knows manyPersons who areAttendees.
We need to be able to select a single Trainer and multiple Attendees of aSeminar.
• So, lets implement these features in our app.
181

---

11 Reactive Forms
Figure 11.4: The SeminarEditComponent allowing to create and edit seminar objects.
Person
Firstname
Lastname
Email
isAdm in
Password
S eminar
Name
Venue
Date
Trainer1
*
Attendees* *
Figure 11.5: Data model showing the Seminar’s association to Person objects as
Trainer and Attendees.
Enhancing Seminar
Currently, the model class Seminar only has the propertiesname, venue and date.
• We now add two more properties to it:teacher and attendees.
• The propertyteacher may hold a reference to a singlePerson object.
• The property attendees is an array ofPerson objects.
1 export class Seminar {
2 teacher: Person | null = null;
3 attendees: Person[] = [];
4
5 constructor(
6 public id:string,
7 public name:string,
8 public venue:string,
9 public date:Date
10 ) { }
11 }
182

---

11.3 Custom Form Controls
Test Data
Both thePersonService and theSeminarService manage their objects in-memory.
• All changes are discarded when reloading the app.
• We will have to take care of this problem later.
To be able to test the functionality of our app both services provide some test-data.
• In the SeminarService we also add teachers and attendees to this test-data now:
1 private async createTestData() {
2 let persons = await this.person_service.getAll();
3
4 let sem1 = new Seminar("1", "Objectoriented Programming", "HSHL", new Date('2021-04-01'));
5 sem1.teacher = persons[0];
6 sem1.attendees.push(persons[1], persons[2]);
7 ...
8
9 this.objects = [sem1, ...];
10 }
The rest of the service can be left untouched.
• All methods still work the same way also with seminars holding teachers and
attendees.
11.3 Custom Form Controls
PersonSingleSelectComponent
Our Seminars can now point to teachers and attendees.
• We now need a way to actually select a teacher and and attendees in theSem-
inarEditComponent.
We need twocustom form controls implemented as components.
• Lets start with selecting a single Person object to become the teacher for a seminar.
• We create a new component:npx ng generate component person/PersonSingleSelect
We can then use the selector of the newPersonSingleSelectComponent and add it to the
template of theSeminarEditComponent.
183

---

11 Reactive Forms
1 <div class="mb-3">
2 <label for="teacher">Teacher:</label>
3 <app-person-single-select></app-person-single-select>
4 </div>
Loading Person Objects
The new PersonSingleSelectComponent can use the PersonService to load all Person
objects.
1 export class PersonSingleSelectComponent implements OnInit {
2 @Input() selected: Person | null = null;
3 all: Person[] = [];
4
5 constructor(private service:PersonService) { }
6
7 async ngOnInit(): Promise<void> {
8 this.all = await this.service.getAll();
9 }
10 }
We also define a property selected holding the currently selectedPerson object.
• By adding theInput() decorator to it we can use property binding to set a Person
object (teacher) from within the template of theSeminarEditComponent.
1 <app-person-single-select [selected]="teacher"></app-person-single-select>
Template
We can now build a drop-down select in the template of the PersonSingleSelectCompo-
nent.
• We can iterate over allPerson objects and add these elements to the select.
1 <select #s (change)="onSelectChanged(s.value)">
2 <option selected disabled>Please select a Person</option>
3 <option *ngFor="let obj of all" [selected]="isSelected(obj)"
4 [value]="obj.id">
5 {{obj.firstname}} {{obj.lastname}}
6 </option>
7 </select>
184

---

11.3 Custom Form Controls
Figure 11.6: The PersonSingleSelectComponent with a dropdown to select one person
as teacher.
Selecting a Person
Additionally, we implement two methods:onSelectChanged() and isSelected().
• onSelectChanged() updates the selectedPerson.
• isSelected() checks whether an option is currently selected.
1 onSelectChanged(id: string): void {
2 const found = this.all.find(x => x.id === id);
3 this.selected = found ?? null;
4 }
5
6 isSelected(obj: Person): boolean {
7 return this.selected != null && obj.id === this.selected.id;
8 }
Result
As a result we can now select one single Person object as part of ourSeminarEditCom-
ponent.
ControlValueAccessor
Unfortunately, the PersonSingleSelectComponent is not integrated with our Reactive
Form.
• We can not use the form model to set or read a selectedPerson object.
185

---

11 Reactive Forms
In the form model each input field is represented as aFormControl.
• Angular comes with built-in functionality to bridge between aFormControl and
all existing HTML-inputs.
• But, there is no such bridge for custom form elements like ourPersonSingleSelect-
Component.
Bridging between a custom form element and aFormControl is done by implementing
the ControlValueAccessor interface.
• By implementing multiple methods we allow aFormControl to interact with our
custom form element.
Implementing ControlValueAccessor
By implementing methodwriteValue() the FormControl can set aPerson object.
1 writeValue(element: Person): void {
2 this.selected = element;
3 }
Change detection is realized by multiple callbacks.
• The FormControl registers those callbacks on ourPersonSingleSelectComponent
to get informed about changes.
• So, we need to call them if changes occur, e.g. a differentPerson object is selected.
We will not go into further details here.
• There are multiple good sources about implementing this interface, e.g. [6].
Interacting with Custom Form Elements
After we implemented theControlValueAccessorwe can use thePersonSingleSelectCom-
ponent the same way as it was a standard input element.
• WecancreateaFormControltorepresenttheelementinthemodel: teacher: new FormControl(null, [Validators.required])
• Wecansetthecurrentvalueoftheteacherintheform: this.form.setValue({ ..., teacher: this.obj.teacher });
As we also added the validator required we can even validate that a teacher was se-
lected.
• So, we can also add an according error-message to the form:
186

---

11.4 Custom Validators
Figure 11.7: The SeminarEditComponent with teacher selection and attendees
checkboxes.
1 <span class="text-danger" *ngIf="form.controls.teacher.touched && form.controls.teacher.invalid">
2 A teacher is required!
3 </span>
PersonMultipleSelect
We can now select a singlePerson object as the teacher of aSeminar.
• We can implement another custom form controlPersonMultipleSelectComponent
to select multiplePerson objects as attendees as well.
• Instead of a dropdown select we can use e.g. multiple checkboxes.
The result then looks like that:
11.4 Custom Validators
Custom Validator
There is one last problem we need to solve.
• We need to prevent a user from selecting a teacher that is also an attendee.
• Hence, we need to implement a custom validation rule.
Of course, we could simply add a manual check into theonSubmit() method of the
SeminarEditComponent.
• The smarter way is to implement acustom validator and adding it to the form
model.
A custom validator can be implemented in multiple ways, see [7].
187

---

11 Reactive Forms
• Here, we want to implement a specific class.
• So, we generate a new service:ng generate service Seminar/TeacherIsNoAttendee
We also register this service in the application configuration or provide it in root.
• Then, we can inject that service into our components.
Implementing a Custom Validator
The new class TeacherIsNoAttendeeService needs to implement interfaceValidator.
• We especially need to implement method validate().
• This method gets theFormGroup as a parameter and may returnValidationErrors.
• We can now read the current values from the form and check, if the teacher is in
the list of attendees.
1 validate(control: AbstractControl): ValidationErrors | null {
2 let teacher = form.controls.teacher.value;
3 let attendees = form.controls.attendees.value;
4
5 if (!teacher || !attendees)
6 return null;
7
8 if (attendees.findIndex(x => x.id === teacher.id) === -1)
9 return null;
10
11 return { teacherIsAttendee: true };
12 }
Using the Custom Validator
As the new custom validator is implemented as a service we can inject it into theSem-
inarEditComponent.
• The validator is not specific to a singleFormControl.
• So, we add it to the list of general validators in theFormGroup.
1 constructor(
2 ...,
3 private tina:TeacherIsNoAttendeeService) {
4 this.form = new FormGroup(
5 {
6 ...
7 },
8 {
188

---

11.5 Summary and Exercises
Figure 11.8: Validation error shown when the selected teacher is also listed as an
attendee.
9 validators: this.tina.validate
10 }
11 );
12 }
Showing errors
The advantage of using a custom validator is that the form model reflects the validation
state.
• Accordingly, we can then use these flags in the template to visualize errors.
If our validator indicates an error we can show a message to the user:
1 <span class="text-danger" *ngIf="form.errors != null && form.errors.teacherIsAttendee">
2 A teacher cannot be an attendee!
3 </span>
11.5 Summary and Exercises
Summary
We learned……
• how to create and use reactive forms.
• how to use validators and how to reflect the validation state in the view.
• howtoimplementcustomformcontrolsbyimplementingthe ControlValueAccessor
interface.
• how to implement custom validators.
189

---

11 Reactive Forms
Exercises
Questions:
• What classes are needed to create a form model?
• Does the validation system of reactive forms automatically prevent submitting false
data?
• What validation flags does an object of typeFormControl provide?
• What is the purpose of the ControlValueAccessor?
Continue to work on your semester project!
• Create a form to add and edit objects and validate the content using validators.
• Create a custom form element and add it to the form model by implementing the
ControlValueAccessor interface.
• Implement a custom validator.
190

---

12 Google Firebase
12.1 Firebase
Enhancements
During the last chapters we implemented more and more features of our SeminarMan-
ager.
• Unfortunately, we still need to do some more.
So far, we can only run and test the application on our local development machine.
• But, a real-world application should be accessible via a public URL.
• Thus, we need todeploy the application to a remote server.
We also have no realdata-persistence yet.
• On page reload, all changes are lost.
• To persist data, it must be stored outside of memory.
Let’s see how we can fix this.
Firebase
In order to implement storage and hosting we need some kind ofinfrastructure.
• So, we usually need dedicated hardware (servers, networks) running certain operat-
ing systems and software packages (web-servers, database-systems, load-balancers,
...).
Providing and managing infrastructure is a complex topic.
• It is not in scope of this lecture.
• Please see lecture Web-Backends for more on this topic.
In this lecture we will make use one single cloud-service offered by Google:Firebase.
191

---

12 Google Firebase
• We can use Firebase todeploy our application to some cloud infrastructure.
• Firebase provides a cloud-based NoSQL-database.
• Firebase includes a service toauthenticate users.
New Project
Before we can use Firebase we need to have a Google-account.
• Then, we can create a new project with Firebase with the nameSeminarManager.
• In the project settings we can also edit the location in which the infrastructure
will be hosted.
Our Firebase project may be realized through multiple apps.
• AswewanttohostourAngularapplicationwithFirebasewecreateanewweb-app.
• Hence, we create a new Web-App with the nickname Angular-App.
• We also activate hosting on this new app and skip the rest of the questions.
We can now install the Firebase Tools providing a Command Line Interface in our
machine.
• TheFirebaseToolscomeasNode.jspackages: npm install firebase-tools --save-dev
• Then, all Firebase CLI commands are executed vianpx firebase ...
• Aftertheinstallationwecanchangetothedirectoryofourappandlogin: npx firebase login
Firebase Wizard
Now, we need to initialize our app with Firebase.
• This is done using the CLI again:npx firebase init
• A wizard is started to check for multiple settings.
We also need to activate features we want to use.
• Here, we select the Cloud Firestore and hosting.
All other settings can be left to the default values.
192

---

12.2 Build and Deploy
Figure 12.1: The Firebase initialization wizard selecting features for the project.
12.2 Build and Deploy
Build
By default, Firebase uses files from the local directorypublic for deployment.
• We need to ensure that Angular places the result of packaging our app into this
directory.
• This is done inangular.json: "outputPath": { "base": "public", "browser": "" }
• Alsoupdate firebase.json topointtothecorrectsubdirectory: "public": "public/browser"
Building the angular app can be done by using the CLI of Angular.
• We can easily package our app in only a few files:npx ng build
• Tocreateaproduction-buildyouaddanotherflag: npx ng build --configuration production
• This may then use a different set of configuration settings (later more).
We can now use Firebase to locally test our app before deployment.
• We can start the Firebase Emulator Suite:npx firebase emulators:start
• The CLI shows the local URLs for testing the application.
193

---

12 Google Firebase
Figure 12.2: Firebase deployment output after running npx firebase deploy
.
Figure 12.3: Firebase hosting information showing the public URL of the deployed app.
Deployment
If everything looks fine we can deploy the app to the cloud-servers of Firebase.
• This is done with the Firebase CLI again:npx firebase deploy
• As the result of building and deploying our app we can now use it via a public
URL, e.g. https://seminarmanager-71b07.web.app/.
12.3 Cloud Firestore
Cloud Firestore
Currently, bothPersonService andSeminarService store their objects in-memory only.
• If the SeminarManager is reloaded all changes are lost.
• Of course, this is not what we want.
• We need a way to storePerson and Seminar objects persistently.
Firebase provides a modern NoSQL database calledCloud Firestore .
• Data is stored incollections and documents.
194

---

12.3 Cloud Firestore
Figure 12.4: Firestore data structure with collections and documents.
• Each document has a unique ID.
• Documents contain JSON-like data.
We can access Firestore directly from our Angular app via an API.
Collections and Documents
Firestore stores data in a hierarchical structure:
• A collection contains multiple documents.
• Each document represents one object.
We will use one collection forPerson and one forSeminar.
Access Rules
By default, Firestore blocks all access.
• For development, we temporarily allow full access.
195

---

12 Google Firebase
1 rules_version = '2';
2 service cloud.firestore {
3 match /databases/{database}/documents {
4 match /{document=**} {
5 allow read, write: if true;
6 }
7 }
8 }
W arning: In production, access must be restricted (e.g.request.auth != null).
• We do this after integrating authentication.
Loading Firestore
Cloud Firestore is configured inapp.config.ts.
1 import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
2 import { provideFirestore, getFirestore } from '@angular/fire/firestore';
3
4 export const appConfig: ApplicationConfig = {
5 providers: [
6 provideFirebaseApp(() => initializeApp(environment.firebase)),
7 provideFirestore(() => getFirestore()),
8 ...
9 ]
10 };
• Firestore can now be injected anywhere in the application.
Firestore API
We inject theFirestore service and use standalone functions.
1 import { Firestore } from '@angular/fire/firestore';
2
3 constructor(private firestore: Firestore) { }
Operations are performed using functions such as:
• collection() → reference to a collection
• doc() → reference to a document
• getDocs() → read all documents of a collection
• setDoc() → create or overwrite a document
196

---

12.3 Cloud Firestore
• addDoc() → create a document with auto-generated ID
• deleteDoc() → delete a document
New Services
We now need new versions ofPersonService and SeminarService.
• The new implementations should useCloud Firestore .
• However, we do not want to remove the existing in-memory services.
• We want to be able toswitch between local and cloud-based persistence.
So, we create additional files such as:
• firestore.person.service.ts
• firestore.seminar.service.ts
By default, we still use the in-memory services during development.
• In production, Angular should replace them by the Firestore-based versions.
Test and Production
Angular replaces files based on the selected build configuration defined inangular.json.
1 "production": {
2 "fileReplacements": [
3 {
4 "replace": "src/app/shared/person.service.ts",
5 "with": "src/app/shared/firestore.person.service.ts"
6 },
7 {
8 "replace": "src/app/shared/seminar.service.ts",
9 "with": "src/app/shared/firestore.seminar.service.ts"
10 }
11 ]
12 }
This allows us to use different persistence strategies:
• npx ng serve → in-memory services
• npx ng build --configuration production → Firestore services
197

---

12 Google Firebase
getAll()
We can now implement thegetAll() method of the newFirestorePersonService.
1 async getAll(): Promise<Person[]> {
2 const result: Person[] = [];
3
4 const querySnapshot = await getDocs(
5 collection(this.firestore, "people")
6 );
7
8 querySnapshot.forEach((docSnap) => {
9 const data = docSnap.data();
10 result.push(new Person(
11 docSnap.id, data.firstname, data.lastname, data.email
12 ));
13 });
14
15 return result;
16 }
get()
Loading a single object by its ID is also straightforward:
1 import { doc, getDoc } from '@angular/fire/firestore';
2
3 async get(id: string): Promise<Person | null> {
4 const docRef = doc(this.firestore, "people", id);
5 const snapshot = await getDoc(docRef);
6
7 if (!snapshot.exists()) return null;
8
9 const data = snapshot.data();
10 return new Person(
11 snapshot.id, data.firstname, data.lastname, data.email
12 );
13 }
remove()
Deleting an object is also simple:
1 import { doc, deleteDoc } from '@angular/fire/firestore';
2
3 async remove(obj: Person): Promise<void> {
4 if (!obj) return;
198

---

12.3 Cloud Firestore
5
6 await deleteDoc(doc(this.firestore, "people", obj.id));
7 this.changed.next();
8 }
save()
Saving an object is a bit more complex as we need to distinguish between creating a new
document and updating an existing one.
1 import { collection, doc, setDoc, addDoc } from '@angular/fire/firestore';
2
3 async save(obj: Person): Promise<void> {
4 const data = {
5 firstname: obj.firstname,
6 lastname: obj.lastname,
7 email: obj.email
8 };
9
10 if (!obj.id) {
11 const docRef = await addDoc(collection(this.firestore, "people"), data);
12 obj.id = docRef.id;
13 } else {
14 await setDoc( doc(this.firestore, "people", obj.id), data);
15 }
16
17 this.changed.next();
18 }
Result
We now have two implementations of our service classes.
• One implementation stores objects only in memory.
• The other one usesCloud Firestore .
By switching between Angular environments we can choose which version is active.
• Development remains simple and independent of the cloud.
• Production uses persistent cloud storage.
Typical commands:
• npx ng serve → local dev server with in-memory services
199

---

12 Google Firebase
Figure 12.5: Users created in the Firebase Authentication console.
• npx ng serve --configuration production → Angular app with Firestore-based ser-
vices
• npx firebase emulators:start → local Firebase emulators for Firestore/Auth/Host-
ing
12.4 Authentication
Authentication
Firebase does not only provide a database and hosting.
• We can also integrateauthentication services into our app.
To authenticate users with Firebase we can activate multiple sign-in methods.
• We will simply use email and password here.
• But you could also allow users to authenticate with e.g. Google, Facebook, ...
In order to use Firebase authentication we first activate this feature in the console.
• Then, we allow users to use email and password.
• Using the Firebase console we can also add one or more users.
Auth Provider
To use Firebase authentication in a standalone Angular app, add provideAuth() to
app.config.ts.
1 import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
2 import { provideFirestore, getFirestore } from '@angular/fire/firestore';
3 import { provideAuth, getAuth } from '@angular/fire/auth';
4
5 export const appConfig: ApplicationConfig = {
6 providers: [
7 provideFirebaseApp(() => initializeApp(environment.firebase)),
8 provideFirestore(() => getFirestore()),
200

---

12.4 Authentication
9 provideAuth(() => getAuth()),
10 ...
11 ]
12 };
We can now create a copy of our AuthenticationService in filefirebase.authorization.ser-
vice.ts.
• We replace our old implementation the same way as we did for the persistence
services.
Firebase Auth
We injectAuth and use the standaloneauthState() function.
1 import { Auth, authState } from '@angular/fire/auth';
2
3 constructor(private auth: Auth) {
4 authState(this.auth).subscribe((user) => {
5 if (user) {
6 this.user = user;
7 this.changed.next(true);
8 } else {
9 this.user = null;
10 this.changed.next(false);
11 }
12 });
13 }
We subscribe to the observableauthState() to detect login and logout events.
• If there is a change we forward this event to our own subscribers viachanged.next().
• Hence, theLoginComponent and the navigation bar will get notified.
Login and Logout
Login and logout use standalone functions withauth as first argument.
• signInWithEmailAndPassword() throws an error if credentials are wrong.
1 import { signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
2
3 async login(email: string, password: string): Promise<boolean> {
4 try {
5 await signInWithEmailAndPassword(this.auth, email, password);
6 return true;
7 } catch {
201

---

12 Google Firebase
8 return false;
9 }
10 }
Logging-out is very simple:
1 async logout(): Promise<void> {
2 await signOut(this.auth);
3 }
Authentication and Firestore Rules
Firebase Authentication and Firestore Security Rules work together automatically.
• After login, Firebase issues an authentication token.
• This token is automatically attached to all Firestore requests.
We can use this information in our Firestore rules:
1 rules_version = '2';
2 service cloud.firestore {
3 match /databases/{database}/documents {
4 match /{document=**} {
5 allow read, write: if request.auth != null; // Only authenticated users can read and write
6 }
7
8 }
9 }
• request.auth != null ensures that only logged-in users can access the database.
• request.auth.uid can be used for more fine-grained access control.
Result
We can now build the app for the production environment.
• In this environment we will then use Firebase to both authenticate users and to
store the data in the Cloud Firestore.
After building and deploying the all features are available to our users.
• npx ng build --configuration production
• npx firebase deploy
202

---

12.5 Summary and Exercises
The application is now a real cloud-based web application.
• The employees of EduWeb can create Person accounts.
• They can manage Seminars and attach Persons as Trainers and Attendees to them.
• All those functions are protected as only authenticated users can work with the
app.
12.5 Summary and Exercises
Summary
We learnd…
• what the Firebase platform of Google can do for us.
• how to build an Angular app for different environments.
• how to use the hosting functionality of Firebase.
• how Cloud Firestore works.
• how to store objects into the database by using the Javascript API.
• how to load objects from the database.
• how to delete objects from the database.
• how to implement authentication.
Exercises
Questions
• How can you manage different environments in Angular?
• How can an Angular app be deployed to the Firebase cloud?
• What steps are necessary to use the Firebase API in an Angular app?
• How does Cloud Firestore structure data?
Finish the work on your semester project!
• Implement new versions of your services using the Firebase API.
• Ensure that these new versions are used in production.
• Deploy your app to the Firebase servers.
203

---



---

Bibliography
[1] Martin Fowler and David Rice.Patterns of Enterprise Application Architecture .
17. print. The Addison-Wesley Signature Series. Boston, Mass.: Addison-Wesley,
2011. 533 pp.isbn: 978-0-321-12742-6.
[2] Florian Franke and Johannes Ippen.Apps mit HTML5 und CSS3: für iPad, iPhone
und Android ; [Geodaten, Videos, Sound, Grafiken, Bewegungssensoren u.v.m. ;
Arbeit mit jQuery Mobile, Sencha Touch, PhoneGap ; inkl. Entwicklung von Tablet-
Magazinen]. 2., aktualisierte und erw. Aufl. Galileo Computing. Bonn: Galileo
Press, 2013. 524 pp.isbn: 978-3-8362-2237-2.
[3] Rahul Saxena. Single Page Application (SPA) Using AngularJS, Web API and
MVC 5 . Mar. 4, 2015.url: https://www.c-sharpcorner.com/uploadfile/rah
ul4_saxena/single-page-application-spa-using-angularjs-web-api-and-
m/ (visited on 03/12/2021).
[4] Christoph Höller. Angular: das umfassende Handbuch . 1. Auflage, 1. korrigierter
Nachdruck. Rheinwerk Computing. Bonn: Rheinwerk Verlag GmbH, 2017. 783 pp.
isbn: 978-3-8362-3914-1.
[5] Gregor Woiwode et al.Angular: Grundlagen, fortgeschrittene Techniken und Best
Practices mit TypeScript - ab Angular 4, inklusive NativeScript und Redux . 1.
Auflage. iX Edition. Heidelberg: dpunkt.verlag, 2017. 551 pp.isbn: 978-3-86490-
357-1.
[6] Majd Asab. Implementing Control Value Accessor in Angular . Medium. Feb. 10,
2019. url: https://medium.com/@majdasab/implementing-control-value-ac
cessor-in-angular-1b89f2f84ebf (visited on 03/15/2021).
[7] Kevin Kreuzer.Angular inDepth - The Best Way to Implement Custom Validators .
inDepthDev. Sept. 3, 2020.url: https://indepth.dev/posts/1319/the-best-
way-to-implement-custom-validators (visited on 03/16/2021).
[8] Document Object Model . In:Wikipedia. Mar. 8, 2021.url: https://en.wikiped
ia.org/w/index.php?title=Document_Object_Model (visited on 03/12/2021).
[9] Matthias Apsel.Box-Modell – SELFHTML-Wiki . Jan. 6, 2021.url: https://wi
ki.selfhtml.org/wiki/Box-Modell (visited on 03/12/2021).
[10] Cooper, S. CS 98SI: Introduction to JavaScript - The Document Object Model .
url: https://web.stanford.edu/class/cs98si/slides/the-document-objec
t-model.html (visited on 03/12/2021).
205

---

