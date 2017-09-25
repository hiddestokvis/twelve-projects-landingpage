import * as React from 'react';
import { FormGroup, Label } from 'reactstrap';
import './form.css';

interface OwnProps {
  placeholder: string;
  handleChange: Function;
  value: string | boolean;
  name: string;
}
type CheckboxProps = OwnProps;

export class FormCheckbox extends React.Component<CheckboxProps, {}> {
  private handleChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;

  constructor(props: CheckboxProps) {
    super(props);
    this.handleChange = props.handleChange.bind(this);
  }

  render() {
    return (
      <FormGroup check={true}>
        <Label check={true}>
          <input
            name={this.props.name}
            onChange={this.handleChange}
            value={(String(this.props.value) === 'true') ? 'false' : 'true'}
            type="checkbox"
            checked={String(this.props.value) === 'true'}
          /> Ik heb de <a href="/12projects_voorwaarden.pdf" target="_blank">voorwaarden</a> gelezen en wil 
          mijn pitch insturen met kans dat deze gekozen wordt
        </Label>
      </FormGroup>
    );
  }
}
