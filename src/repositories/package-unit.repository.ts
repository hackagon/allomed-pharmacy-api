import { EntityRepository, Repository } from 'typeorm';
import { PackageUnitEntity } from '../entities/package-unit.entity';

@EntityRepository(PackageUnitEntity)
export class PackageUnitRepository extends Repository<PackageUnitEntity> { }
