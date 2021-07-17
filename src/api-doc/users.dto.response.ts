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
    description:
      'name of user, used to identify and other purposes like contact',
  })
  name: string;

  @ApiProperty({
    type: 'string',
    description: 'Contact phone number with DDD',
  })
  phone: string;

  @ApiProperty({
    type: 'string',
    description: 'Just a normal password without caracteres restrictions',
  })
  password: string;
}
