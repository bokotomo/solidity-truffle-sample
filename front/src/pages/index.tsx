import TemplateHome from '../components/pc/templates/Home';
import { useAdapterHome } from '../modules/adapter/home';
import { useEventHome } from '../modules/event/home';
import { useFetchHome } from '../modules/fetch/home';
/**
 * ページ: トップページ
 */
function Index(): JSX.Element {
  useEventHome();
  const { accounts } = useFetchHome();
  const { myAccount, contractLevelItem, myTokenIds, setProvider } =
    useAdapterHome();

  return (
    <TemplateHome
      accounts={accounts}
      myAccount={myAccount}
      contractLevelItem={contractLevelItem}
      myTokenIds={myTokenIds}
      setProvider={setProvider}
    />
  );
}

export default Index;
