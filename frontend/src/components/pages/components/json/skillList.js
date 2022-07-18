import js_icon from "@assets/js-icon.webp"
import nodejs_icon from "@assets/nodejs-icon.webp"
import py_icon from "@assets/py-icon.png"
import react_icon from "@assets/react-icon.png"
import mui_icon from "@assets/mui-icon.png"
import docker_icon from "@assets/docker-icon.png"
import pg_icon from "@assets/pg-icon.png"
import redis_icon from "@assets/redis-icon.svg"
import aws_icon from "@assets/aws-icon.png"


const skillList = [
  {
    label: "Javascript",
    icon: js_icon,
    descriptions: [
      "Javascript is the basis of web development with HTML and CSS,",
      "called the three pillars of web-dev.",
      "Currently, I use React for development,",
      "and three tastes are satisfied at once.",
    ],
  },
  {
    label: "NodeJS",
    icon: nodejs_icon,
    descriptions: [
      "NodeJS allows me to write backend APIs in JS.",
      "You can run a service in just a few lines of code,",
      "which is very friendly to back-end newbies.",
    ],
  },
  {
    label: "Python",
    icon: py_icon,
    descriptions: [
      "Python is a language created by God.",
      "I mainly use it to write crawlers,",
      "strategy backtesters, and trading bots.",
    ],
  },
  {
    label: "React",
    icon: react_icon,
    descriptions: [
      "I use React to build my front-end projects all the time.",
      "I love writing JSS syntax,",
      "which makes the development fast and flexible.",
    ],
  },
  {
    label: "MaterialUI",
    icon: mui_icon,
    descriptions: [
      "MaterialUI is one of my most-used CSS Frameworks.",
      "There are many commonly-used UI components in it.",
      "With a little fine-tuning, you can create beautiful web pages.",
    ],
  },
  {
    label: "Docker",
    icon: docker_icon,
    descriptions: [
      "I use Docker to build the environment for a full-stack projects.",
      "With Docker Compose, making the development flexible and fast.",
    ],
  },
  {
    label: "PostgreSQL",
    icon: pg_icon,
    descriptions: [
      "The first RMDBS I have learned,",
      "also called the table languages",
      "I like to write raw SQL",
      "but maybe using ORM is a better choice in some scenes.",
    ],
  },
  {
    label: "Redis",
    icon: redis_icon,
    descriptions: [
      "A Very fast database, often used to temporarily",
      "store the data like sessions and cookies",
      "And there are many powerful functions built",
      "For example, I use Pub/Sub in many scenes",
    ],
  },
  {
    label: "AWS",
    icon: aws_icon,
    descriptions: [
      "There are hundreds of services on AWS",
      "and there are many ways to build a cloud service",
      "I use Circle-CI to continuously deploy my code to ELB",
      "With RDS and Elasticache to build full-stack applications,",
      "VPC is your good partner",
    ],
  },
];

export default skillList;
