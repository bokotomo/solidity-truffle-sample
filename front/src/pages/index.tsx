import TemplateHome from '../components/pc/templates/Home';
import { useFetch } from '../modules/fetch/home';
import { useEvent } from '../modules/event/home';

/**
 * ページ: トップページ
 */
function Index() {
  useEvent();
  const { accounts } = useFetch();

  return <TemplateHome accounts={accounts} />;
}

export default Index;
