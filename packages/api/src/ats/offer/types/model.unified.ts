import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsUUID,
  IsOptional,
  IsString,
  IsDateString,
  IsIn,
} from 'class-validator';

export type OfferStatus =
  | 'DRAFT'
  | 'APPROVAL_SENT'
  | 'APPROVED'
  | 'SENT'
  | 'SENT_MANUALLY'
  | 'OPENED'
  | 'DENIED'
  | 'SIGNED'
  | 'DEPRECATED';
export class UnifiedAtsOfferInput {
  @ApiPropertyOptional({
    type: String,
    description: 'The UUID of the creator',
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  created_by?: string;

  @ApiPropertyOptional({
    type: Date,
    description: 'The remote creation date of the offer',
    nullable: true,
  })
  @IsDateString()
  @IsOptional()
  remote_created_at?: string;

  @ApiPropertyOptional({
    type: Date,
    description: 'The closing date of the offer',
    nullable: true,
  })
  @IsDateString()
  @IsOptional()
  closed_at?: string;

  @ApiPropertyOptional({
    type: Date,
    description: 'The sending date of the offer',
    nullable: true,
  })
  @IsDateString()
  @IsOptional()
  sent_at?: string;

  @ApiPropertyOptional({
    type: Date,
    description: 'The start date of the offer',
    nullable: true,
  })
  @IsDateString()
  @IsOptional()
  start_date?: string;

  @ApiPropertyOptional({
    type: String,
    description: 'The status of the offer',
    nullable: true,
  })
  @IsIn([
    'DRAFT',
    'APPROVAL_SENT',
    'APPROVED',
    'SENT',
    'SENT_MANUALLY',
    'OPENED',
    'DENIED',
    'SIGNED',
    'DEPRECATED',
  ])
  @IsOptional()
  status?: OfferStatus | string;

  @ApiPropertyOptional({
    type: String,
    description: 'The UUID of the application',
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  application_id?: string;

  @ApiPropertyOptional({
    type: Object,
    description:
      'The custom field mappings of the object between the remote 3rd party & Panora',
    nullable: true,
    additionalProperties: true,
  })
  @IsOptional()
  field_mappings?: Record<string, any>;
}

export class UnifiedAtsOfferOutput extends UnifiedAtsOfferInput {
  @ApiPropertyOptional({
    type: String,
    description: 'The UUID of the offer',
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  id?: string;

  @ApiPropertyOptional({
    type: String,
    description: 'The remote ID of the offer in the context of the 3rd Party',
    nullable: true,
  })
  @IsString()
  @IsOptional()
  remote_id?: string;

  @ApiPropertyOptional({
    type: Object,
    description: 'The remote data of the offer in the context of the 3rd Party',
    nullable: true,
    additionalProperties: true,
  })
  @IsOptional()
  remote_data?: Record<string, any>;

  @ApiPropertyOptional({
    type: Object,
    description: 'The created date of the object',
    nullable: true,
  })
  @IsOptional()
  created_at?: Date;

  @ApiPropertyOptional({
    type: Object,
    description: 'The modified date of the object',
    nullable: true,
  })
  @IsOptional()
  modified_at?: Date;
}
