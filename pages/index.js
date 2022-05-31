import { Heading } from 'components/01-atoms/heading/heading';
import { Button } from 'components/01-atoms/button/button';
import { TextInput } from 'components/01-atoms/text-input/text-input';
import { Hamburger } from 'components/01-atoms/hamburger/hamburger';
import { Text } from 'components/01-atoms/text/text';

export default function Home() {
  return (
  <div style={{ backgroundColor: '#e1e1e1' }}>
      <Heading type="h1" >Hello World!</Heading>
      <Button>Button</Button>
      <TextInput></TextInput>
      <Hamburger />
      <Text>Text</Text>
  </div> 
  )
}
