import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { MonitorService } from './monitor.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MonitorEntity } from './entities/monitor.entity';

@ApiTags('异常监控')
@Controller('monitor')
export class MonitorController {
  constructor(private readonly monitorService: MonitorService) {}

  @ApiOperation({
    summary: '保存异常信息',
  })
  @Post('create')
  create(@Body() monitorEntity: MonitorEntity) {
    console.log('Controller monitorEntity: ', monitorEntity);
    return this.monitorService.create(monitorEntity);
  }

  @ApiOperation({ summary: '查询全部异常信息' })
  @Get('getAll')
  getAll() {
    return this.monitorService.getAll();
  }

  @ApiOperation({ summary: '根据 id 查询一条异常信息' })
  @Get('getErrorById')
  getErrorById(@Query('id') id: string) {
    return this.monitorService.getErrorById(id);
  }
}
