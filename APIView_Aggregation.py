from django.db.models import Count, Sum, Avg, Max, Min

class AggregationAPI(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        group_by = request.data.get("group_by")
        aggregation_field = request.data.get("aggregation_field")
        aggregation_function = request.data.get("aggregation_function")
        from_date = request.data.get("from_date")
        to_date = request.data.get("to_date")

        aggregate_values_0 = Case.objects.using("tenant_0").filter(created__range=[from_date, to_date]).values(group_by).order_by(group_by).annotate(Count(aggregation_field, distinct=True))
        aggregate_values_1 = Case.objects.using("tenant_1").filter(created__range=[from_date, to_date]).values(group_by).order_by(group_by).annotate(Count(aggregation_field, distinct=True))
        # aggr_values_list = list(chain(aggregate_values_0, aggregate_values_1))

        if(aggregation_function == Count): #for count
            AV1 = {}
            AV2 = {}

            for dic in aggregate_values_0:
                AV1.update({dic['priority__name']: dic['id__count']})

            for dic in aggregate_values_1:
                AV2.update({dic['priority__name']: dic['id__count']})

            res = {}
            for i in AV1:
                if(i in AV2):
                    res[i] = (AV1.get(i)+AV2.get(i))
                else:
                    res[i] = AV1.get(i)

            for i in AV2:
                if i not in res:
                    res[i] = AV2.get(i)

            result = []
            for i in res:
                result.append({'priority__name': i, 'id__count': res.get(i)})
        elif(aggregation_function == Sum): #for sum, same as count
            AV1 = {}
            AV2 = {}

            for dic in aggregate_values_0:
                AV1.update({dic['priority__name']: dic['id__count']})

            for dic in aggregate_values_1:
                AV2.update({dic['priority__name']: dic['id__count']})

            res = {}
            for i in AV1:
                if(i in AV2):
                    res[i] = (AV1.get(i)+AV2.get(i))
                else:
                    res[i] = AV1.get(i)

            for i in AV2:
                if i not in res:
                    res[i] = AV2.get(i)

            result = []
            for i in res:
                result.append({'priority__name': i, 'id__count': res.get(i)})
        elif(aggregation_function == Avg): #for avg
            AV1 = {}
            AV2 = {}

            for dic in aggregate_values_0:
                AV1.update({dic['priority__name']: dic['id__count']})

            for dic in aggregate_values_1:
                AV2.update({dic['priority__name']: dic['id__count']})

            res = {}
            for i in AV1:
                if(i in AV2):
                    res[i] = (AV1.get(i)+AV2.get(i))/2
                else:
                    res[i] = (float(AV1.get(i))/2)

            for i in AV2:
                if i not in res:
                    res[i] = (float(AV2.get(i))/2)

            result = []
            for i in res:
                result.append({'priority__name': i, 'id__count': res.get(i)})

        elif(aggregation_function == Max): #for max
            result = []
            for i in AV1:
                if(i in AV2):
                    result.append({'priority__name': i, 'id__count': max(AV1.get(i), AV2.get(i))})
                else:
                    result.append({'priority__name': i, 'id__count': max(AV1.get(i))})
            for i in AV2:
                if i not in AV1:
                    result.append({'priority__name': i, 'id__count': max(AV2.get(i))})
        elif(aggregation_function == Min): #for min
            result = []
            for i in AV1:
                if(i in AV2):
                    result.append({'priority__name': i, 'id__count': min(AV1.get(i), AV2.get(i))})
                else:
                    result.append({'priority__name': i, 'id__count': min(AV1.get(i))})
            for i in AV2:
                if i not in AV1:
                    result.append({'priority__name': i, 'id__count': min(AV2.get(i))})

        return result
