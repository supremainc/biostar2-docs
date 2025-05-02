import { translate } from '@docusaurus/Translate';

export default function Badge({ children }) {
  return (
    <span className='badge'>
      {translate({ 
        id: "theme.revision.badge",
      })}:&nbsp;
      {children}
    </span>
  )
}