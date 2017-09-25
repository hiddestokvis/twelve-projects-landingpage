import * as React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import './form.css';

interface OwnProps {
  placeholder: string;
  handleChange: Function;
  value: string;
  name: string;
}
type InputProps = OwnProps;

export class FormInput extends React.Component<InputProps, {}> {
  private handleChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;

  constructor(props: InputProps) {
    super(props);
    this.handleChange = props.handleChange.bind(this);
  }

  render() {
    return (
      <InputGroup>
        <InputGroupAddon className="custom-addon">{this.props.placeholder}:</InputGroupAddon>
        <Input
          placeholder={this.props.placeholder}
          name={this.props.name}
          value={this.props.value}
          onChange={this.handleChange}
        />
      </InputGroup>
    );
  }
}
