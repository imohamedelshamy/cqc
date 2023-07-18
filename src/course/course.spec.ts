import { Test, TestingModule } from '@nestjs/testing';
import { Course } from './course';

describe('Course', () => {
  let provider: Course;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Course],
    }).compile();

    provider = module.get<Course>(Course);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
