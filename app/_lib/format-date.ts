export function formatDate(value: Date) {
  return new Intl.DateTimeFormat("pt-BR").format(value);
}
