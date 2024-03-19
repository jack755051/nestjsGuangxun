import {ApiProperty} from "@nestjs/swagger";

export class TestDto {
    @ApiProperty({ type: 'string', format: 'binary' })
    file: any;
}