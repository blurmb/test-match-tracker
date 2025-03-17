import { getMatchesFilter, MatchFilter, setFilter } from "@src/entities/Match";
import { ListBox } from "@src/shared/ui";
import { ListBoxItem } from "@src/shared/ui";
import { useAppDispatch, useAppSelector } from "@src/store/hooks";

export const MatchFilterListBox = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(getMatchesFilter);
  const onChange = (value: MatchFilter) => {
    dispatch(setFilter(value));
  };

  return (
    <ListBox
      items={labels}
      selected={statusToItem[filter ?? "All"]}
      onChange={onChange}
    />
  );
};

const statusToItem: Record<MatchFilter, ListBoxItem<MatchFilter>> = {
  All: {
    value: "All",
    content: "Все статусы",
  },
  Ongoing: {
    value: "Ongoing",
    content: "Live",
  },
  Finished: {
    value: "Finished",
    content: "Finished",
  },
  Scheduled: {
    value: "Scheduled",
    content: "Match preparing",
  },
};

const labels: ListBoxItem<MatchFilter>[] = [
  statusToItem.All,
  statusToItem.Ongoing,
  statusToItem.Finished,
  statusToItem.Scheduled,
];
