import * as React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import './form.css';

interface OwnProps {
  placeholder: string;
  handleChange: Function;
  value: string;
  name: string;
  options: { key: string, value: string}[] | undefined;
}
type SelectProps = OwnProps;

export class FormSelect extends React.Component<SelectProps, {}> {
  private handleChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;

  constructor(props: SelectProps) {
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
          type="select"
        >
          <option value={0} disabled={true}>Kies project slot&nbsp;&nbsp;&nbsp;&nbsp;&#9662;</option>
          { this.props.options && this.props.options.map(item => (
            <option
              key={item.key}
              value={item.key}
            >
              {item.value}
            </option>
          ))}
        </Input>
      </InputGroup>
    );
  }
}
