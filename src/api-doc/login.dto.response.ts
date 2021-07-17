import { ApiProperty } from '@nestjs/swagger';

export class UserDTOResponse {
  @ApiProperty({
    type: 'number',
    description: 'Auto-generated identifier (unique)',
  })
  id: number;

  @ApiProperty({
    type: 'string',
    description: 'used like a username to login',
  })
  email: string;

  @ApiProperty({
    type: 'string',
    description: 'Just a password withou caractere restrictions',
  })
  password: string;
}
