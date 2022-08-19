/* 
  Aqui onde implementamos o Singleton (https://www.opus-software.com.br/singleton-design-pattern/)

  Exemplo de como fazer:


  import UserRepository from 'modules/users/infra/db/repositories/userRepository';
  import { IUserRepository } from 'modules/users/repositories/IUserRepository';
  import UserServices from 'modules/users/services/userServices';
  import { container } from 'tsyringe';

  //Registrando Repositorio.
  container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
  
  //Registrando Serviço.
  container.registerSingleton<UserServices>('UserServices', UserServices);
*/
