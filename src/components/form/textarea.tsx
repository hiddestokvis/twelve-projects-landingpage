import * as React from 'react';
import { InputGroup, Input } from 'reactstrap';

interface OwnProps {
  placeholder: string;
  handleChange: Function;
  value: string;
  name: string;
}
type TextareaProps = OwnProps;

export class FormTextarea extends React.Component<TextareaProps, {}> {
  private handleChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;

  constructor(props: TextareaProps) {
    super(props);
    this.handleChange = props.handleChange.bind(this);
  }

  render() {
    return (
      <InputGroup>
        <Input
          placeholder={this.props.placeholder}
          name={this.props.name}
          value={this.props.value}
          onChange={this.handleChange}
          type="textarea"
        />
      </InputGroup>
    );
  }
}
