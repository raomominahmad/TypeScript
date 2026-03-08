import type { PropsWithChildren, ReactNode } from "react"

/* 
children is a prop that represents any JSX or React elements placed between a component’s opening and closing tags.

Its type is usually ReactNode, which includes elements, strings, numbers, fragments, arrays, or null.

PropsWithChildren automatically adds this prop so your component can safely accept nested content.

*/

interface CardProps extends PropsWithChildren {
  title : string;
  footer? : ReactNode
}

function Card({title ,children , footer} : CardProps) {
  return (
  <section>
    <h2>{title}</h2>
    <div>{children}</div>
    {footer && <footer> {footer}</footer>}
  </section>  
)
}

export default Card