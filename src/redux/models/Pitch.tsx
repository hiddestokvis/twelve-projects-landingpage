export interface Pitch {
  person: {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: string;
    postal_code: string;
    city: string;
  };
  pitch: {
    description: string;
    link: string;
    slot_id: number | null;
  };
  acceptTerms: boolean;
};

export interface PitchState {
  isSubmitting: boolean;
  failed: boolean;
  item: Pitch;
}
