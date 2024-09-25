import type { MDXComponents } from 'mdx/types'

function H1({ children }){
    return (<h1 className="text-4xl text-white mt-4 mb-2">{children}</h1>)
}

function H2({ children }){
    return (<h2 className="text-2xl text-white mt-4 mb-2">{children}</h2>)
}

function H4({ children }){
  return (<h4 className="text-lg text-white mb-2">{children}</h4>)
}


function UL({ children }){
  return (<div className='ml-12'>
    <ul className="list-disc list-inside">{children}</ul>
  </div>)
}

function P({ children }){
  return (<p className="my-2">{children}</p>)
}
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: H1,
    h2: H2,
    h4: H4,
    ul: UL,
    p: P,
    ...components,
  }
}